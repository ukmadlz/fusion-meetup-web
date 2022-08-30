import { getSanityImgSrc } from ".";
import type { SanityImg, SanityImgMapped } from "../../types/cms/Sanity";
import type { SanityTeamMember, TeamMember } from "../../types/cms/TeamMember";

// TODO: Replace with next-sanity-image
// https://www.sanity.io/plugins/next-sanity-image
const mapSanityImg = (img: SanityImg | undefined): SanityImgMapped | null => {
  if (!img) return null;

  return {
    src: getSanityImgSrc(img),
    alt: img.alt,
    width: img.width,
    height: img.height,
  };
};

export const mapSanityTeamMember = (
  sanityTeamMember: SanityTeamMember
): TeamMember => ({
  key: sanityTeamMember._key,
  name: sanityTeamMember.name,
  twitter: sanityTeamMember.twitter || null,
  image: mapSanityImg(sanityTeamMember.image),
});