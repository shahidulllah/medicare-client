

const SectionTitle = ({heading, description}) => {
    return (
        <div className="my-10 p-5 space-y-3 text-center flex flex-col items-center">
            <h1 className="text-5xl font-roboto font-bold">{heading}</h1>
            <p className="text-gray-600 w-7/12  ">{description}</p>
        </div>
    );
};

export default SectionTitle;
