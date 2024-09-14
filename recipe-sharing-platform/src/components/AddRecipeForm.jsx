import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';  // Yup for schema validation

// Validation schema using Yup
const validationSchema = Yup.object({
  title: Yup.string().required('Recipe title is required'),
  ingredients: Yup.string()
    .required('Ingredients are required')
    .test('min-ingredients', 'At least two ingredients are required', (value) => {
      return value && value.split('\n').length >= 2; // Ensure at least two ingredients
    }),
  instructions: Yup.string().required('Preparation steps are required'),
});

function AddRecipeForm() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Add a New Recipe</h1>
      
      <Formik
        initialValues={{ title: '', ingredients: '', instructions: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          // Handle form submission logic here
          console.log('Form Data:', {
            title: values.title,
            ingredients: values.ingredients.split('\n'),
            instructions: values.instructions.split('\n'),
          });
          resetForm(); // Clear the form after submission
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* Recipe Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Recipe Title
              </label>
              <Field
                type="text"
                name="title"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the recipe title"
              />
              <ErrorMessage name="title" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Ingredients */}
            <div>
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
                Ingredients (one per line)
              </label>
              <Field
                as="textarea"
                name="ingredients"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="List ingredients (one per line)"
                rows="5"
              />
              <ErrorMessage name="ingredients" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Instructions */}
            <div>
              <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">
                Preparation Steps (one per line)
              </label>
              <Field
                as="textarea"
                name="instructions"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the preparation steps"
                rows="5"
              />
              <ErrorMessage name="instructions" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md transition duration-300"
                disabled={isSubmitting}
              >
                Submit Recipe
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddRecipeForm;