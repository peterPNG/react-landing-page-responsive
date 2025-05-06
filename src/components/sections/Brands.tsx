import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const partner_logos=[
    "discord",
    "openai",
    "paypal",
    "slack",
    "spotify",
    "uber",
    "youtube"
]


export const Brands = () =>{
    return <section>
        <Container className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
                <Title>
                    Trusted by Industry Leaders
                </Title>
            </div>
            <div className="flex justify-center flex-wrap gap-4 ">
                {
                    partner_logos.map((partner_logos, key)=>(
                        <div key={key} className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group ">
                            <img 
                            width="100" height="60" 
                            src={`src/assets/logos/${partner_logos}.png`} 
                            className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 
                                        group-hover:grayscale-105 "
                            />
                        </div>
                    ))
                }
            </div>
        </Container>
    </section>
}