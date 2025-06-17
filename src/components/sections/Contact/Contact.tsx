function Contact() {
    return (
        <section className="container mx-auto my-24">
            <div className="flex flex-col rounded-3xl bg-color-haiti sm:flex-row">
                <div className="mx-auto flex flex-col items-center justify-center gap-5 p-5 py-24 sm:p-8 lg:p-16">
                    <div>
                        <h1 className="text-center text-xl font-semibold text-white sm:text-left sm:text-2xl lg:text-4xl">
                            Pronto para iniciar nosso próximo projeto?
                        </h1>
                    </div>
                    <div>
                        <p className="text-center text-sm font-normal text-color-athensGray sm:text-left sm:text-base lg:text-xl">
                            Deixe nós colocar suas ideias em pratica com tecnologia e design excepcionais.
                        </p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-4 sm:justify-normal">
                        <div>
                            <p className="text-white">button text</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
