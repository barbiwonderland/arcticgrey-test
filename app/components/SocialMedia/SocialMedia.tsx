import {CgInstagram} from 'react-icons/cg';
import Image1 from '../../assets/images/instagram/Image-1.png';
import {GetInstagramMediaQuery} from 'storefrontapi.generated';
import {Suspense} from 'react';
import {Await} from '@remix-run/react';

function SocialMedia({media}: {media: Promise<GetInstagramMediaQuery | null>}) {
  return (
    <Suspense fallback={<div>Loading Media...</div>}>
      <Await resolve={media}>
        {(result) => {
          console.log(result, 'resultado media');
          return (
            <div className="w-screen mb-10 h-100vh">
              <div className="w-[90%] md:h-[500px] h-auto flex mx-auto  ">
                <div className="grid md:w-[95%] w-full md:h-[500px] h-auto grid-cols-auto md:grid-cols-[245px_245px_245px_245px_245px_245px]  rounded-2xl justify-around md:gap-1 gap-8">
                  <div className="md:w-[500px] w-full h-[245px] bg-[#F6F6F5] col-start-1 col-end-3 flex flex-col flex-wrap justify-around content-center  ">
                    <div className="w-[224px] h-[60px] flex flex-row items-center justify-between">
                      <div className="logo h-[60px] w-[60px] font-main text-xs text-white font-medium bg-black rounded-full flex justify-center items-center">
                        Logo
                      </div>
                      <div className="font-medium text-[#1B1F23]  text-[20px]">
                        @uncmfrt.com
                      </div>
                    </div>
                    <div className="font-main text-[14px] follow-button bg-white h-[55px] w-[240px] border-2 border-black rounded-2xl font-medium flex items-center justify-center">
                      Follow Us on Instagram
                    </div>
                  </div>
                  {result?.metaobject?.fields[0].references?.nodes.map(
                    (item, index) => {
                      return (
                        <div
                          key={index}
                          className="relative group w-[150px] h-[150px] md:w-[245px] md:h-[255px] "
                        >
                          <img src={item?.image?.url} alt="" />
                          <div className="absolute hidden inset-0 bg-black opacity-50 group-hover:flex"></div>

                          <div className="absolute hidden inset-0 group-hover:flex items-center justify-center text-white text-xl">
                            <CgInstagram size={30} />
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}

export default SocialMedia;
