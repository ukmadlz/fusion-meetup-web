import clsx from "clsx";

import { AboutFusionInfo } from "../../types/cms/AboutFusionInfo";
import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import { SanityContent } from "../atoms/SanityContent";

interface SponsorFusionProps {
  about: AboutFusionInfo;
}

export const SponsorFusion: React.FC<SponsorFusionProps> = ({
  about,
  showLearnMoreButton,
}) => (
  <div className="flex flex-col gap-6">
    <Heading level={2} className="py-4 pb-8">
        Supporting Fusion
    </Heading>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 items-center">
        <SanityContent value={about.sponsorship} />
    </div>

    <Button color="yellow" href="/Friends_of_Fusion_2023.pdf" target="_blank" >
    Read our Sponsorship Packages
    </Button>
  </div>
);
