import { getRecipeBySlug } from '@/lib/api';

export default async function recipePreview(req, res) {
  if ((req.query.secret !== process.env.SANITY_PREVIEW_SECRET) || !req.query.slug) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const recipe = await getRecipeBySlug(req.query.slug)

  if(!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }

  /**
   * With setPreviewData fnc NextJS injects cookies in our browser
   * e.g __prerender_bypass __next_preview_data
   */
  res.setPreviewData({})
  res.writeHead(307, { Location: `/recipes/${recipe.slug}` })
  res.end();
}
