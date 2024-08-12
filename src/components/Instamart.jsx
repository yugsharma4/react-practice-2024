import { useState } from "react";
import Section from "./Section";

const Instamart = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(null);

  return (
    <div>
      <h1 className="font-bold m-2 p-2">Instamart</h1>

      {/* Different sections */}
      <Section
        title="About us"
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste ad quod autem mollitia fuga laudantium quibusdam nihil. Ipsum maiores, magni reprehenderit tempora qui, delectus impedit autem consequuntur eveniet, fuga magnam eaque quae iusto fugit exercitationem iste? Obcaecati accusamus pariatur veritatis, vero, inventore magnam corporis sunt adipisci, architecto exercitationem placeat."
        }
        isVisible={isSectionVisible === "about"}
        setIsVisible={() =>
          setIsSectionVisible(isSectionVisible === "about" ? null : "about")
        }
      />
      <Section
        title="Careers"
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste ad quod autem mollitia fuga laudantium quibusdam nihil. Ipsum maiores, magni reprehenderit tempora qui, delectus impedit autem consequuntur eveniet, fuga magnam eaque quae iusto fugit exercitationem iste? Obcaecati accusamus pariatur veritatis, vero, inventore magnam corporis sunt adipisci, architecto exercitationem placeat."
        }
        isVisible={isSectionVisible === "career"}
        setIsVisible={() =>
          setIsSectionVisible(isSectionVisible === "career" ? null : "career")
        }
      />
      <Section
        title="Contact us"
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste ad quod autem mollitia fuga laudantium quibusdam nihil. Ipsum maiores, magni reprehenderit tempora qui, delectus impedit autem consequuntur eveniet, fuga magnam eaque quae iusto fugit exercitationem iste? Obcaecati accusamus pariatur veritatis, vero, inventore magnam corporis sunt adipisci, architecto exercitationem placeat."
        }
        isVisible={isSectionVisible === "contact"}
        setIsVisible={() =>
          setIsSectionVisible(isSectionVisible === "contact" ? null : "contact")
        }
      />
    </div>
  );
};

export default Instamart;
