import Menu from './Menu';

export default function Header() {
  // SafeRendering will be false on the first render and true on all following renders
  const [SafeRendering, setSafeRendering] = useState(false);
  useEffect(() => { setSafeRendering(true); }, []);

  if (SafeRendering)
    return (<Menu />)

}