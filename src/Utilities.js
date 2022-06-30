export const handleAuthInputChange = (componentObject) => (e) =>
  componentObject.setState({
    ...componentObject.state,
    [e.target.name]: e.target.value,
  });
