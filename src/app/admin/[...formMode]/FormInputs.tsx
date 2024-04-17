import { Category } from "@/app/util/dataTypes";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { Field, FieldInputProps, FormikErrors, FormikProps } from "formik";
import { Dispatch, SetStateAction } from "react";

export interface ProductFormValues {
  name: string;
  image: string;
  price: number;
  categories: string[];
}

const CustomInput = ({
  field,
  form,
  ...props
}: {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
}) => {
  return <Input {...field} {...props} />;
};

const CustomSelect = ({
  field,
  form,
  categories,
  ...props
}: {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  categories: Category[];
}) => {
  return (
    <Select
      label="Categorias"
      selectionMode="multiple"
      placeholder="Seleccionar categorías"
      className="max-w-xs"
      {...field}
      {...props}
    >
      {categories.map((category) => (
        <SelectItem key={category._id} value={category._id}>
          {category.name}
        </SelectItem>
      ))}
    </Select>
  );
};

type FormInputProps = {
  categories: Category[];
  errors: FormikErrors<ProductFormValues>;
  setValues: (
    values: SetStateAction<ProductFormValues>,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<ProductFormValues>>;
  values: ProductFormValues;
  selectedCategories: Set<string[]>;
  setSelectedCategories: Dispatch<SetStateAction<Set<string[]>>>;
  setImageFile: Dispatch<SetStateAction<string | File | undefined>>;
};

const FormInputs = ({
  errors,
  categories,
  setValues,
  values,
  selectedCategories,
  setSelectedCategories,
  setImageFile,
}: FormInputProps) => {
  return (
    <>
      <Field
        id="name"
        component={CustomInput}
        label="Título"
        isInvalid={errors.name}
        errorMessage={errors.name && "Ingresar título válido"}
        className="mb-4 max-md:w-full md:w-1/2 lg:w-1/3"
        classNames={{
          label: " md:text-base 2xl:text-lg lg:mx-2",
          inputWrapper: "rounded-2xl lg:h-unit-11 2xl:h-unit-12",
          input: "md:text-base 2xl:text-lg lg:px-2",
        }}
        labelPlacement="outside"
        name="name"
        placeholder="Ingresar Título"
      />
      <Field
        id="price"
        component={CustomInput}
        label="Precio"
        isInvalid={errors.price}
        errorMessage={errors.price && "Ingresar precio válido"}
        className="mb-4 max-md:w-full md:w-1/2 lg:w-1/3"
        classNames={{
          label: " md:text-base 2xl:text-lg lg:mx-2",
          inputWrapper: "rounded-2xl lg:h-unit-11 2xl:h-unit-12",
          input: "md:text-base 2xl:text-lg lg:px-2",
        }}
        labelPlacement="outside"
        name="price"
        type="number"
        min="0"
        placeholder="Ingresar Precio"
      />
      <Field
        id="categories"
        component={CustomSelect}
        label="Categorías"
        isInvalid={errors.categories}
        errorMessage={errors.categories && "Ingresar categorías"}
        className="mb-4 max-md:w-full md:w-1/2 lg:w-1/3"
        classNames={{
          label: " md:text-base 2xl:text-lg lg:mx-2",
          inputWrapper: "rounded-2xl lg:h-unit-11 2xl:h-unit-12",
          input: "md:text-base 2xl:text-lg lg:px-2",
        }}
        labelPlacement="outside"
        name="categories"
        categories={categories}
        selectedKeys={selectedCategories}
        onSelectionChange={setSelectedCategories}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const categories = e.target.value.split(",");
          setValues({ ...values, categories });
        }}
        placeholder="Ingresar Categorías"
      />
      <div className="flex flex-col gap-2">
        <label className="text-foreground md:text-base 2xl:text-lg lg:mx-2">
          Imagen
        </label>
        <input
          id="image"
          className={`rounded-2xl lg:h-unit-11 2xl:h-unit-12 py-2 lg:px-2 bg-white ${
            errors.image ? "border border-red-500" : ""
          }`}
          name="image"
          type="file"
          accept="image/*"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setImageFile(e.target.files ? e.target.files[0] : "")
          }
          placeholder="Ingresar Precio"
        />
        {errors.image ? (
          <p className="text-sm text-red-500">{errors.image}</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default FormInputs;
