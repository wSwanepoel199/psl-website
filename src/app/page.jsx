import React from 'react';
import Image from 'next/image';
import pslAbout from '@public/psl-about-us.jpg';
import pslCommunity from '@public/psl-community.jpg';
import pslCoordination from '@public/psl-coordination.jpg';
import pslGroup from '@public/psl-group.jpg';
import pslSil from '@public/psl-sil.jpg';
import CardHeader from '@/components/CardHeader/CardHeader';
import CardBody from '@/components/CardBody/CardBody';
import dynamic from 'next/dynamic';
import BottomForm from '@/components/BottomForm/BottomForm';
import Banner from '@app/@banner/page';

const DynamicButton = dynamic(() => import('@/components/Button/Button'), {
  loading: () => <p>Loading...</p>,
});

const DynamicCard = dynamic(() => import('@/components/Card/Card'), {
  loading: () => <p>...Loading Card</p>
});

const Home = () => {

  return (
    <div className={`min-h-screen w-full flex flex-col justify-between items-center bg-psl-active-text dark:bg-psl-primary`} >
      <nav className={`bg-psl-secondary dark:bg-psl-secondary/80  w-full min-h-5 px-5 py-2`}>
        <div className={`w-full max-w-7xl mx-auto flex sm:items-center justify-between sm:justify-around flex-wrap`}>
          <a href="tel:0427358514">
            <div className={`flex items-center p-1 sm:p-0`}>
              <span className="material-icons text-sm text-psl-active-text">
                call
              </span>
              <p className='text-psl-active-text'>0427 358 514</p >
            </div>
          </a>
          <a href={`mailto:${process.env.SMTP_EMAIL}?&bcc=${process.env.SMTP_BCC_LIST}`} target="_blank">
            <div className={`flex items-center p-1 sm:p-0`}>
              <span className="material-icons text-sm text-psl-active-text">
                email
              </span>
              <p className='text-psl-active-text'>contact@paritysl.com</p>
            </div>
          </a>
        </div>
      </nav>
      <main className='w-full flex flex-col items-center justify-around flex-1'>
        <section name="section1" className='w-full section1'>
          <div className='bg-psl-primary/60 w-full py-20 px-2 sm:px-5 md:px-10'>
            <Banner email={process.env.SMTP_EMAIL} bcc={process.env.SMTP_BCC_LIST} onVisible={['inFromRight', 'inFromLeft']} />
          </div>
        </section>
        <section name="section2" className={`w-full bg-psl-active-text dark:bg-psl-primary py-10 px-2 sm:px-5 md:px-10 `}>
          <div className={`w-full max-w-7xl flex items-center justify-around flex-wrap mx-auto`}>
            <div className={` w-full md:w-1/2 lg:w-1/3 xl:w-1/2 md:px-2 flex justify-center`}>
              <Image
                src={pslAbout}
                alt='placeholder image'
                width={400}
                height={200}
                className={`w-auto rounded-lg`}
              />
            </div>
            <div className={`w-full md:w-1/2 lg:w-1/3 xl:w-1/2 md:px-2 pt-5 md:pt-0`}>
              <h6 className=' text-psl-secondary dark:text-psl-secondary-text font-bold pb-2 text-lg'>About</h6>
              <h2 className='text-4xl text-psl-primary dark:text-psl-active-text font-semibold'>Parity Supported Living</h2>
              <div className='border-b-2 border-solid border-psl-active-link my-3 w-1/5'></div>
              <p className='text-psl-primary dark:text-psl-active-text'>Parity Supported Living was founded by people that have worked in the disability support industry for many years. We are a Hunter Valley based business, driven to help participants gain access to the NDIS. Parity assists clients to reach the goals within their plans through community access and guidance from our team.</p>
              <a href="tel:0427358514"><DynamicButton className='bg-psl-secondary hover:bg-psl-active-link rounded-xl py-4 px-8 mt-10 font-semibold text-psl-active-text' onVisible='fadeIn'>Call 0427 358 514</DynamicButton></a>
            </div>
          </div>
        </section>
        <section name="section3" className={`w-full bg-psl-active-text dark:bg-psl-primary py-10 px-2 sm:px-5 md:px-10`}>
          <div className={`w-full max-w-7xl flex mx-auto items-center justify-around flex-wrap`}>
            <div className='text-center flex flex-col items-center'>
              <h6 className='text-psl-secondary dark:text-psl-secondary-text font-bold pb-2 text-lg'>Services</h6>
              <h2 className='text-4xl text-psl-primary dark:text-psl-active-text font-semibold'>Services We Provide</h2>
              <p className='text-psl-primary dark:text-psl-active-text py-4'>Parity works with an extensive collection of clients striving to provide assistance and knowledge to allow participants to use their plans effectively. The NDIS is about choice, and we work with our clients to ensure we are delivering client-centered and individualised supports to meet both their NDIS and personal goals.</p>
              <div className='border-b-2 border-solid border-psl-active-link my-7 w-1/5'></div>
            </div>
            <div className='h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-center'>
              <DynamicCard
                className={`bg-psl-secondary-text dark:bg-psl-primary-text`}
                onVisible='fadeFromBottom'>
                <CardHeader>
                  <Image
                    src={pslCommunity}
                    alt='placeholder image'
                    width={400}
                    height={200}
                  />
                </CardHeader>
                <CardBody className={`py-5`}>
                  <h4 className='text-psl-primary dark:text-psl-active-text text-2xl font-semibold px-3 sm:px-4 pb-4'>COMMUNITY ACCESS</h4>
                  <p className='text-psl-primary dark:text-psl-active-text px-4 sm:px-5'>Parity Supported Living aims to assist people with disability to live a full life and be able to engage in the community. We support you in taking part in the community, whether that be signing up for an art class, going on a holiday, learning to play an instrument, or many other activities.</p>
                </CardBody>
              </DynamicCard>
              <DynamicCard
                className={`bg-psl-secondary-text dark:bg-psl-primary-text`}
                onVisible='fadeFromBottom'>
                <CardHeader>
                  <Image
                    src={pslSil}
                    alt='placeholder image'
                    width={400}
                    height={200}
                  />
                </CardHeader>
                <CardBody className={`py-5`}>
                  <h4 className='text-psl-primary dark:text-psl-active-text text-2xl font-semibold px-3 sm:px-4 pb-4'>SUPPORTED INDEPENDENT LIVING</h4>
                  <p className='text-psl-primary dark:text-psl-active-text px-4 sm:px-5'>Our goal is to encourage you or your loved one to live as independently as possible. We focus on your strengths and achievements while offering the support you need in a variety of areas. Our team of passionate and experienced staff are dedicated to training and supporting you to live the best life you can, in the comfort and safety of your own home.</p>
                </CardBody>
              </DynamicCard>
              <DynamicCard
                className={`bg-psl-secondary-text dark:bg-psl-primary-text`}
                onVisible='fadeFromBottom'>
                <CardHeader>
                  <Image
                    src={pslGroup}
                    alt='placeholder image'
                    width={400}
                    height={200}
                  />
                </CardHeader>
                <CardBody className={`py-5`}>
                  <h4 className='text-psl-primary dark:text-psl-active-text text-2xl font-semibold px-3 sm:px-4 pb-4'>GROUP SUPPORTS</h4>
                  <p className='text-psl-primary dark:text-psl-active-text px-4 sm:px-5'>Group activities are one of the key elements of our support services. You will be supported to join in and be engaged in community, social or recreational activities that are meaningful to you. <br /> Whether it’s visiting your local bowling club, going to Hat Pac, or crossroad every week and other developmental daily living and activities.</p>
                </CardBody>
              </DynamicCard>
              <DynamicCard
                className={`bg-psl-secondary-text dark:bg-psl-primary-text`}
                onVisible='fadeFromBottom'>
                <CardHeader>
                  <Image
                    src={pslCoordination}
                    alt='placeholder image'
                    width={400}
                    height={200}
                  />
                </CardHeader>
                <CardBody className={`py-5`}>
                  <h5 className='text-psl-primary dark:text-psl-active-text text-2xl font-semibold px-3 sm:px-4 pb-4'>COORDINATION SERVICES</h5>
                  <p className='text-psl-primary dark:text-psl-active-text px-4 sm:px-5 '>Coordination service can assist you with the rollout and management of your NDIS plan by linking you with services when required and ensuring your funding is utilised correctly across all areas of your NDIS plan. <br /><br /> They will help you choose supporting services that suit your needs.</p>
                </CardBody>
              </DynamicCard>
            </div>
          </div>
        </section>
        <section name="section4" className={`w-full bg-psl-active-text dark:bg-psl-primary py-10 px-2 sm:px-5 md:px-10`}>
          <div className={`w-full max-w-7xl mx-auto flex items-center justify-around flex-wrap`}>
            <div className={`w-full lg:w-1/2 pb-10 md:px-5 lg:pb-0 bg-psl-active-text dark:bg-psl-primary z-10`}>
              <h6 className=' text-psl-secondary dark:text-psl-secondary-text font-bold pb-2 text-lg'>WE`D LOVE TO HEAR FROM YOU</h6>
              <h2 className='text-4xl text-psl-primary dark:text-psl-active-text font-semibold'>Please Contact Us if you have Questions or Suggestions</h2>
              <div className='border-b-2 border-solid border-psl-active-link my-3 w-1/5'></div>
              <div>
                <h6 className=' text-psl-primary dark:text-psl-active-text font-bold p-2 text-lg'>CONTACT INFO</h6>
                <ul>
                  <li className={`p-2`}>
                    <a href="tel:0427358514" className='flex items-center'>
                      <span className={`material-icons text-sm p-2 rounded-full bg-psl-active-link text-psl-active-text`}>
                        call
                      </span>
                      <p className='text-psl-primary dark:text-psl-active-text'>0427 358 514</p>
                    </a>
                  </li>
                  <li className={`p-2`}>
                    <a href={`mailto:${process.env.SMTP_EMAIL}?&bcc=${process.env.SMTP_BCC_LIST}`} className='flex items-center'>
                      <span className={`material-icons text-sm p-2 rounded-full bg-psl-active-link text-psl-active-text`}>
                        email
                      </span>
                      <p className='text-psl-primary dark:text-psl-active-text'>contact@paritysl.com</p>
                    </a>
                  </li>
                  <li className={`flex p-2 items-center`}>
                    <span className={`material-icons text-sm p-2 rounded-full bg-psl-active-link text-psl-active-text`}>
                      location_pin
                    </span>
                    <p className='text-psl-primary dark:text-psl-active-text'>Unit 4/116 Mitchell Avenue,
                      Kurri Kurri. NSW 2327</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`w-full lg:w-1/2 md:px-5 z-10`}>
              <BottomForm />
            </div>
          </div>
        </section>
        <section name="section5" className='w-full'>
          <iframe
            height="450"
            className={`border-0 w-full`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=-32.80972626198365,151.47765816424086`}
            title="Unit 4/116 Mitchell Avenue, Kurri Kurri. 2327, NSW."
            aria-label="Unit 4/116 Mitchell Avenue, Kurri Kurri. 2327, NSW."></iframe>
        </section>
      </main>
    </div >
  );
};

export default Home;