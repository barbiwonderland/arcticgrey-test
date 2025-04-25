import {BsArrowUpRightCircle} from 'react-icons/bs';
import {GetMetaobjectsQuery} from 'storefrontapi.generated';

type CardItem = {
  title?: string;
  description?: string;
  image?: string;
};

const GoalsSection = (goals: {goals: GetMetaobjectsQuery}) => {

  const cleanGoalsData = goals.goals.metaobjects.edges.map((item) => {
    const fields = item.node.fields;
    return fields.reduce<CardItem>((acc, { key, value, reference }) => {
      if (key === "title") {
        acc.title = value ?? undefined;
      } else if (key === "description") {
        acc.description = value ?? undefined;
      } else if (key === "image" && reference?.image?.url) {
        acc.image = reference.image.url ?? undefined;
      }
      return acc;
    }, {});
  });


  return (
    <div className="h-auto mb-28">
      <div className="titles flex justify-center text-center flex-col mt-16 gap-2 w-[404px] h-[138px] mx-auto ">
        <div className="font-main text-[16px]">COMFORTABLY UNCOMFORTABLE </div>
        <div className="font-main text-4xl font-medium">
          Start with your Goals
        </div>
        <div className="font-main text-[16px] text-gray-600">
          We cannot become what we want to be by remaining what we are.{' '}
        </div>
      </div>
      <div className="cards flex flex-row md:gap-5  justify-around w-full md:flex-nowrap sm:flex-wrap md:mx-10 flex-wrap ">
        {
          cleanGoalsData && cleanGoalsData.map((item, index)=>{
            return(
              <div
              key={index}
                className="card md:w-[288px] w-[150px] h-[350px] md:h-[483px] flex flex-col justify-start mt-10 relative mb-5 "
              >
                 <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[392px] object-contain rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-102"
                /> 
                <div>
                  <div className="flex flex-row justify-between flex-no-wrap">
                    <div className="text w-[80%]  ">
                      <div className="title font-main text-[18px] font-medium mt-2">
                        {item.title}
                      </div>
                      <div className="description font-main text-[16px] text-gray-700 mt-2 ">
                        {item.description}
                      </div>
                      <BsArrowUpRightCircle
                        size={20}
                        className="absolute bottom-[48px] right-[10px] md:size-9"
                      />
                    </div>
                  </div>
                </div>
              </div>
          
            )
          })
        }
      </div>
    </div>
  );
};

export default GoalsSection;
