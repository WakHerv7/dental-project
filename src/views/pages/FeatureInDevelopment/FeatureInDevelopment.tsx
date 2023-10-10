import Container from '@/components/shared/Container'
import DoubleSidedImage from '@/components/shared/DoubleSidedImage'

const FeatureInDevelopment = () => {
    return (
        <Container className="h-full">
            <div className="h-full flex flex-col items-center justify-center">
                <DoubleSidedImage
                    src="/img/others/welcome.png"
                    darkModeSrc="/img/others/welcome.png"
                    alt="Access Denied!"
                />
                <div className="mt-6 text-center">
                    <h3 className="mb-2">Fonctionnalité à venir !</h3>
                    <p className="text-base">
                        Elle sera disponible très prochainement
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default FeatureInDevelopment
