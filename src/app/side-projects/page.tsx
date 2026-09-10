import Layout from '@/components/layout';
import { SideProjectList } from './components/SideProjectList';

const projects = [
  {
    id: '01',
    title: 'Robotic Bending Gripper',
    description:
      'Custom pneumatic end-effector developed for gripping and manipulating timber during robotic steam bending.',
    imagePath: '/images/thegripper.PNG',
    link: '/projects/steam-bending-gripper'
  },
  {
    id: '02',
    title: 'Wood Steamer Cart',
    description:
      'Mobile steam chamber developed for controlled material preparation and repeated steam-bending experiments.',
    imagePath: '/images/side-projects/steamer.jpg',
    link: '/projects/custom-steamer'
  },
  {
    id: '03',
    title: 'Compression Strap',
    description:
      'Custom restraint system developed to control timber during bending, reduce tensile failure, and improve repeatability.',
    imagePath: '/images/side-projects/compression-strap.jpg',
    link: '/projects/compression-strap'
  },
  {
    id: '04',
    title: 'Robotic Heat Gun Tool',
    description:
      'Custom UR end-effector developed for controlled and repeatable flash drying of steam-bent timber.',
    imagePath: '/images/side-projects/heatgun.jpg',
    link: '/projects/steam-bending-heat-tool'
  },
  {
    id: '05',
    title: 'Rebar Gripper',
    description:
      'Custom UR end-effector integrating a depth camera for gripping, positioning, and re-digitizing rebar during robotic assembly.',
    imagePath: '',
    link: '/projects/rebar-gripper'
  },
  {
    id: '06',
    title: 'Robotic Rebar Tying Tool',
    description:
      'Custom KUKA end-effector developed for automated wire tying and connection-making within multi-robot rebar assembly.',
    imagePath: '',
    link: '/projects/rebar-tying-tool'
  },
  {
    id: '07',
    title: 'Robotic Light Painting Tool',
    description:
      'Custom UR end-effector developed to control light through programmed robotic motion for long-exposure photographic experiments.',
    imagePath: '',
    link: '/projects/light-painting-tool'
  },
  {
    id: '08',
    title: 'Pneumatic Fixture Jig',
    description:
      'Custom pneumatic fixture developed to position, constrain, and hold components during robotic fabrication and assembly.',
    imagePath: '',
    link: '/projects/pneumatic-fixture-jig'
  },
  {
    id: '09',
    title: 'Router Jig',
    description:
      'Custom fabrication jig developed to guide a router for controlled, repeatable machining and accurate material removal.',
    imagePath: '',
    link: '/projects/router-jig'
  },
  {
    id: '10',
    title: 'Universal Testing Machine',
    description:
      'Custom testing machine developed for controlled mechanical testing and quantitative evaluation of fabricated material systems and connections.',
    imagePath: '',
    link: '/projects/universal-testing-machine'
  },
  {
    id: '11',
    title: 'Heat Press',
    description:
      'Custom heated press developed for controlled compression and fabrication of experimental wood composite materials.',
    imagePath: '',
    link: '/projects/heat-press'
  },
  {
    id: '12',
    title: 'ASTM Testing Molds',
    description:
      'Custom molds developed to produce standardized material specimens for repeatable ASTM-based mechanical testing.',
    imagePath: '',
    link: '/projects/astm-testing-molds'
  },
  {
    id: '13',
    title: 'Lignin 3D Printing Extruder',
    description:
      'Custom extrusion system developed for investigating additive manufacturing with lignin-based material mixtures.',
    imagePath: '',
    link: '/projects/lignin-extruder'
  },
  {
    id: '14',
    title: 'Custom 3D Printer',
    description:
      'Custom fabrication platform developed for large-format material extrusion and experimental additive manufacturing workflows.',
    imagePath: '',
    link: '/projects/custom-3d-printer'
  }
];

export default function Page() {
  return (
    <Layout title="">
      <div className="container mx-auto px-4 py-16">
        <SideProjectList projects={projects} />
      </div>
    </Layout>
  );
}