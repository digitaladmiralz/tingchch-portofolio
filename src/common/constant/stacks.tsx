import {
  BsBuilding,
  BsDiagram3,
  BsGlobe2,
  BsImage,
  BsLayers,
} from 'react-icons/bs';
import { FaCube } from 'react-icons/fa';
import { HiOutlineCube } from 'react-icons/hi2';
import {
  MdAnimation,
  MdChair,
  MdDescription,
  MdLandscape,
  MdMap,
  MdOutlineArchitecture,
  MdOutlinePrecisionManufacturing,
  MdPresentToAll,
  MdSlideshow,
} from 'react-icons/md';
import {
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiArchicad,
  SiAutodesk,
  SiAutodeskrevit,
  SiBlender,
  SiRhinoceros,
  SiSketchup,
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  'Autodesk Revit': (
    <SiAutodeskrevit size={iconSize} className='text-blue-500' />
  ),
  'AutoCAD / 2D CAD': (
    <MdOutlinePrecisionManufacturing
      size={iconSize}
      className='text-orange-500'
    />
  ),
  Navisworks: <BsLayers size={iconSize} className='text-emerald-500' />,
  'ACC / BIM 360': <BsDiagram3 size={iconSize} className='text-sky-500' />,
  Dynamo: <HiOutlineCube size={iconSize} className='text-amber-500' />,
  'Rhino / Grasshopper': (
    <SiRhinoceros size={iconSize} className='text-neutral-500' />
  ),
  SketchUp: <SiSketchup size={iconSize} className='text-red-500' />,
  Blender: <SiBlender size={iconSize} className='text-orange-600' />,
  'Clash detection': <BsBuilding size={iconSize} className='text-teal-600' />,
  'BIM standards & LOD': (
    <MdOutlineArchitecture size={iconSize} className='text-cyan-600' />
  ),
  'Architectural Design': (
    <MdOutlineArchitecture size={iconSize} className='text-slate-600' />
  ),
  'Architectural Rendering': (
    <BsImage size={iconSize} className='text-violet-500' />
  ),
  'Floor Plan Design': (
    <MdDescription size={iconSize} className='text-amber-700' />
  ),
  'Photorealistic Rendering': (
    <BsImage size={iconSize} className='text-fuchsia-500' />
  ),
  'Rhinoceros 3D': (
    <SiRhinoceros size={iconSize} className='text-neutral-600' />
  ),
  Drafting: (
    <MdOutlinePrecisionManufacturing
      size={iconSize}
      className='text-orange-600'
    />
  ),
  'Adobe Photoshop': (
    <SiAdobephotoshop size={iconSize} className='text-indigo-500' />
  ),
  'Adobe Illustrator': (
    <SiAdobeillustrator size={iconSize} className='text-orange-500' />
  ),
  'Interior Design': <MdChair size={iconSize} className='text-rose-500' />,
  '3D Design': <FaCube size={iconSize} className='text-teal-500' />,
  '3D Modeling': <FaCube size={iconSize} className='text-cyan-600' />,
  '3D Mockup': <FaCube size={iconSize} className='text-emerald-600' />,
  'Presentation Design': (
    <MdSlideshow size={iconSize} className='text-blue-400' />
  ),
  Presentations: <MdPresentToAll size={iconSize} className='text-sky-600' />,
  'Building Information Modeling': (
    <BsBuilding size={iconSize} className='text-green-700' />
  ),
  'Adobe InDesign': (
    <SiAdobeindesign size={iconSize} className='text-pink-600' />
  ),
  'Map Illustration': <MdMap size={iconSize} className='text-lime-600' />,
  'Site Planning': <MdLandscape size={iconSize} className='text-green-600' />,
  Sitebuilder: <BsGlobe2 size={iconSize} className='text-blue-600' />,
  'Autodesk AutoCAD': <SiAutodesk size={iconSize} className='text-red-600' />,
  'Technical Illustration': (
    <MdOutlineArchitecture size={iconSize} className='text-stone-500' />
  ),
  'Autodesk 3ds Max': (
    <SiAutodesk size={iconSize} className='text-purple-600' />
  ),
  'Autodesk Maya': <SiAutodesk size={iconSize} className='text-cyan-700' />,
  '3D Animation': <MdAnimation size={iconSize} className='text-purple-500' />,
  CAD: (
    <MdOutlinePrecisionManufacturing
      size={iconSize}
      className='text-zinc-600'
    />
  ),
  'Blueprint Style': (
    <MdDescription size={iconSize} className='text-blue-800' />
  ),
  Archicad: <SiArchicad size={iconSize} className='text-lime-700' />,
};
