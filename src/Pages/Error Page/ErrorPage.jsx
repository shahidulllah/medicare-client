import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  
    return (
        <div className="bg-green-200 h-screen">
            <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-lg text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                        <p className=" font-bold text-center mt-4 mb-8">
                            <i>{error.statusText || error.message}</i> <br />
                        </p>
                        <p>
                            <i>{error.data}</i>
                        </p>
                       <Link to ="/"> <button className="btn px-8 mt-4 py-3 font-semibold rounded bg-green-600 text-gray-50">Back to Homepage</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;