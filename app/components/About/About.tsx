
import { GetMetaobjectsQuery } from 'storefrontapi.generated';


type CardItem = {
  title?: string;
  description?: string;
  image?: string;
};

function About(cleanSuplements: {cleanSuplements: GetMetaobjectsQuery}) {
  const cleanData = cleanSuplements.cleanSuplements.metaobjects.edges.map((item) => {
    const fields = item.node.fields;
    return fields.reduce<CardItem>((acc, { key, value, reference }) => {
      if (key === "title") {
        acc.title = value ?? undefined;
      } else if (key === "description") {
        acc.description = value ?? undefined;
      } else if (key === "icon" && reference?.image?.url) {
        acc.image = reference.image.url ?? undefined;
      }
      return acc;
    }, {});
  });
  return (
    <div className="main-about flex flex-col w-screen main-font md:h-[514px] justify-center mx-10 py-10">
      <div className="text w-[400px] h-auto md:h-32">
        <div className="heading text-[12px] md:text-[16px] mb-2">🧐 Why Health & Fitness</div>
        <div className="title text-[20px] md:text-[40px]font-medium">
          Clean Supplements - Made For You
        </div>
      </div>
      <div className="benefits mt-12 flex flex-row w-full gap-8 flex-wrap  ">
        {cleanData && cleanData.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="container flex flex-col w-[350px] h-auto"
              >
                <div className="icon bg-black h-10 w-10 md:w-12 md:h-12 rounded-full mb-6 text-white flex items-center justify-center"><img src={item.image} alt={item.title} /></div>
                <div className="title text-[18px] font-medium <BiLike /><GiThreeLeaves /><TbClipboardText />mb-4">
                  {item.title}
                </div>
                <div className="subtitle text-[12px] md:text-[16px] text-gray-700">{item.description}</div>
              </div>
              </div>
          
          );
        })}
      </div>
    </div>
  );
}

export default About;
