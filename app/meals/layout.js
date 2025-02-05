export const metadata = {
  title: "meals",
  description: "Content of meals shown here",
};
export default function MealsLayout({ children }) {
  return (
    <>
      <p>Meals Layout</p>
      {children}
    </>
  );
}
