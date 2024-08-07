import NotFoundBackButton from "./components/NotFoundBackButton";

export default function NotFoundPage() {
    return (
        <div className="container mx-auto flex justify-center items-center min-h-screen">
            <div className="flex flex-col gap-5 items-center text-center">
            <h1 className="text-9xl">404</h1>
            <p className="text-2xl">Page not Found</p>
            <NotFoundBackButton/>
            </div>
        </div>
    )
}