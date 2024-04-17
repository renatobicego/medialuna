"use client";
import { Category, Product } from "@/app/util/dataTypes";
import {
  deleteFileFirebase,
  uploadFileFirebase,
} from "@/app/util/uploadFileFirebase";
import { Button, Image} from "@nextui-org/react";
import axios from "axios";
import {
  Formik,
  Form,
  FormikHelpers,
} from "formik";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { array, number, object, string } from "yup";
import FormInputs, { ProductFormValues } from "./FormInputs";
import { useParams } from "next/navigation";

const productSchema = object({
  name: string().required().min(3),
  price: number().required().min(1),
  categories: array().required().min(1).test(value => {
    if(value[0] === undefined || value[0] === ''){
      return false
    }
    return true
  }),
});

const FormProduct = ({ categories }: { categories: Category[] }) => {
  const [selectedCategories, setSelectedCategories] = useState<Set<string[]>>(
    new Set([])
  );
  const [imageFile, setImageFile] = useState<File | string>();
  const { formMode } = useParams();
  const isEditing = formMode[0] === "editar";
  const [initialValues, setInitialValues] = useState<ProductFormValues>({
    name: "",
    price: 0,
    categories: [],
    image: "",
  });

  useEffect(() => {
    const getPreviousData = async () => {
      const id = formMode[1];
      const { data } = await axios.get(`/api/products/${id}`);
      const { product }: { product: Product } = data;
      setInitialValues({
        name: product.name,
        categories: product.categories as string[],
        image: product.image,
        price: product.price
      });
    };
    if (formMode[0] === "editar") {
      getPreviousData();
    }
  }, [formMode]);

  const handleSubmit = async (
    values: ProductFormValues,
    actions: FormikHelpers<ProductFormValues>
  ) => {
    try {
      if ((imageFile === "" || !imageFile) && !isEditing) {
        actions.setErrors({ image: "Imagen no subida" });
        return;
      }
      if (imageFile instanceof File) {
        if (imageFile.size > 5000000) {
          actions.setErrors({ image: "Imagen tiene que ser menor a 5mb" });
          return;
        }
        if (isEditing) {
          await deleteFileFirebase(values.image);
        }

        values.image = (await uploadFileFirebase(
          imageFile,
          "medialuna/"
        )) as string;
      }
      
      if (isEditing) {
        await axios.put(`/api/products/${formMode[1]}`, values);
      } else {
        await axios.post(`/api/products`, values);
      }

      Swal.fire({
        text: "Producto publicado/editado",
        icon: "success",
        showConfirmButton: false,
        timer: 1550,
      });

      actions.resetForm();
      setSelectedCategories(new Set([]));
      setImageFile("");
    } catch (error) {
      Swal.fire({
        text: "Error al publicar/editar producto " + error,
        icon: "error",
      });
    }
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur={false}
      enableReinitialize
      validateOnChange={false}
      onSubmit={handleSubmit}
      validationSchema={productSchema}
    >
      {({ errors, isSubmitting, setValues, values }) => (
        <Form className="flex flex-col  gap-4 items-start sm:w-full lg:w-5/6 z-10">
          <FormInputs
            categories={categories}
            errors={errors}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            setValues={setValues}
            values={values}
            setImageFile={setImageFile}
          />
          {isEditing ? (
            <Image
              src={initialValues.image}
              width={400}
              height={400}
              alt={"Foto anterior de " + initialValues.name}
            />
          ) : (
            ""
          )}
          <Button
            disabled={isSubmitting}
            isLoading={isSubmitting}
            type="submit"
            className="bg-white text-rojo py-2 px-6 font-semibold h-auto rounded-2xl text-sm lg:text-lg data-[focus-visble=true]:outline-rojo"
          >
            {isEditing ? "Editar producto" : "Publicar producto"}
          </Button>
          
        </Form>
      )}
    </Formik>
  );
};

export default FormProduct;
