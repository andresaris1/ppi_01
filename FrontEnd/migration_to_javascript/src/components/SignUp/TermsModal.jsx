

export function TermsModal({closeModal}){

    return (
        <div className="modal flex flex-col justify-center items-center"  >

                <h2> Términos y condiciones </h2>
                <p className="text-xs">
                    Bienvenido/a a Bicimaps. Antes de registrarte en nuestra página web y utilizar nuestros servicios, te pedimos que leas detenidamente los siguientes Términos y Condiciones. Al registrarte en Bicimaps, aceptas cumplir con estos términos y condiciones, así como con nuestra Política de Privacidad. Si no estás de acuerdo con alguno de los términos aquí establecidos, te rogamos que no utilices nuestro sitio web ni nuestros servicios.
                    <br />
                    <br />

                    Descripción de los servicios
                    Bicimaps es una plataforma en línea que proporciona información relacionada con rutas de ciclismo, mapas, consejos y otras funcionalidades relacionadas con el mundo de la bicicleta. A través de nuestra página web, podrás acceder a estos servicios de forma gratuita, siempre y cuando cumplas con las disposiciones establecidas en estos Términos y Condiciones.
                    <br />
                    <br />

                    Registro de cuenta
                    2.1 Para utilizar los servicios de Bicimaps, es necesario que te registres y crees una cuenta personal. Debes proporcionar información precisa y actualizada durante el proceso de registro. Eres el único responsable de mantener la confidencialidad de tu nombre de usuario y contraseña, y aceptas notificarnos inmediatamente cualquier uso no autorizado de tu cuenta.

                    2.2 Debes tener al menos 18 años de edad o contar con el consentimiento de tus padres o tutor legal para registrarte en Bicimaps.
                    <br />
                    <br />

                    Uso de la plataforma
                    3.1 Al utilizar Bicimaps, te comprometes a seguir las leyes y regulaciones aplicables, así como a respetar los derechos de otros usuarios. No debes utilizar nuestros servicios para actividades ilegales, fraudulentas, difamatorias, obscenas o que violen los derechos de propiedad intelectual de terceros.

                    3.2 Bicimaps se reserva el derecho de suspender, limitar o cancelar tu cuenta si se determina que has violado estos Términos y Condiciones, o si tu conducta es perjudicial para otros usuarios o para el buen funcionamiento de la plataforma.
                    <br />
                    <br />

                    Contenido generado por los usuarios
                    4.1 Bicimaps permite a los usuarios generar y compartir contenido, como reseñas, comentarios, rutas y fotografías. Al publicar contenido en nuestra plataforma, garantizas que tienes los derechos necesarios para hacerlo y otorgas a Bicimaps una licencia no exclusiva, transferible, libre de regalías y sublicenciable para utilizar, reproducir, modificar, adaptar, publicar, traducir y distribuir dicho contenido.

                    4.2 Bicimaps no se responsabiliza por el contenido generado por los usuarios. Sin embargo, nos reservamos el derecho de eliminar o modificar cualquier contenido que consideremos inapropiado, ilegal o que viole estos Términos y Condiciones.
                    <br />
                    <br />

                    Propiedad intelectual
                    5.1 Todos los derechos de propiedad intelectual relacionados con Bicimaps, incluyendo el diseño, la interfaz, los gráficos, el código y el contenido, son propiedad de Bicimaps o de sus licenciantes. Está estrictamente prohibido copiar, modificar, distribuir o utilizar cualquier parte de nuestra plataforma sin nuestro consentimiento previo por escrito.
                </p>

                <button className='close_box bg-red-500 text-white rounded-full w-8 h-8 flex justify-center items-center' 
                        onClick={() => closeModal(false)}
                > 
                X 
                </button>
        </div>
    )
}