import React from 'react';
import '../../ExportDefault';
import '../../sass/utils/ContainerIndex/_index.scss';
import ImageBannerAbout from '../../components/aboutBanner/AboutBanner';
import BannerAbout from '../../asset/banniere-apropos.png';
import Collapse from '../../components/collapse/Collapse';
import dataCollapse from '../../data/Collapse.json';
import './_about.scss';

const About = () => {
      return (
            <>
                  <ImageBannerAbout src={BannerAbout} alt="decor de montagne" />
                  {dataCollapse.map((item) => (
                        <Collapse
                              key={item.title}
                              title={item.title}
                              content={item.content}
                        />
                  ))}
            </>
      );
};

export default About;
