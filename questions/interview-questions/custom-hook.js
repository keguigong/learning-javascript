// 实现一个自定义hook，获取当前窗口的大小，width、height
// window.innerWidth
const useWindowSize = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const resizeCallback = useCallback(() => {
    const width = window.innerWidth
    const height = window.innerHeight
    setWidth(width)
    setHeight(height)
  }, [])

  // useEffect(() => {
  //     resizeCallback()
  // }, [])

  useEffect(() => {
    resizeCallback()
    const callback = resizeCallback
    window.addEventListener("resize", callback)

    return () => {
      window.removeEventListener("resize", callback)
    }
  }, [resizeCallback])

  return {
    width,
    height
  }
}
