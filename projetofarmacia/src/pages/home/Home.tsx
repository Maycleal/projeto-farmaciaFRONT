
function Home() {

    return (
        <>
      
      <div className="bg-azulfundo flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Farmácia Generation
                            </h2>
                            <p className='text-xl'>
                        Bem vindo(a) a farmácia Generation!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Produtos
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-center ">
                        <img 
                            src="https://storage.googleapis.com/atados-v3/user-uploaded/images/8010b1b6-32bc-4dd4-bc11-a4a607c9974c.png" 
                            alt="Imagem da Página Home" 
                            width="w-3/3"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home