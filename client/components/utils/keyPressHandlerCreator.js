const keyPressHandler = (handlerMap) => {
  return ({ key }) => {
    return handlerMap[key] && handlerMap[key]();
  }
}

export default keyPressHandler;