export const DEFAULT_BLOG_THUMBNAIL =
  "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com/images/blog/default-thumbnail.png";

export function resolveBlogThumbnail(imageUrl?: string | null): string {
  if (imageUrl && imageUrl.trim().length > 0) return imageUrl;
  return DEFAULT_BLOG_THUMBNAIL;
}
