import { getAllRecipes } from '@/lib/api';

export default async function getRecipes(req, res) {
  const data = await getAllRecipes();
  res.status(200).json(data);
}
