const ChildComponent = ({ message }) => <h1>{message}</h1>;

const ParentComponent = () => {
    return <ChildComponent message="Hello from Parent" />;

};
