export default function LoaderFullscreen() {
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center
                text-2xl font-semibold text-white bg-primary-darker hidden" x-ref="loading">
                Loading.....
            </div>
        </>
    );
}