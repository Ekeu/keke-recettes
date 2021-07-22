import { getAllRecipes } from '@/lib/api';

export default async function getRecipes(req, res) {
  const offset = parseInt(req.query.offset || 0, 10);
  const sort = req.query.sort ||'desc'
  const data = await getAllRecipes({ offset, sort });
  res.status(200).json(data);
}
