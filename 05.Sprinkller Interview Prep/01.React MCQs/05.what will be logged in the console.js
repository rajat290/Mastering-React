const Example = () => {
    const [count , setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect called');

    }, [] );

    return <button onClick={() => setCount(count + 1)}>Click</button>
}

// What will be logged in the console?