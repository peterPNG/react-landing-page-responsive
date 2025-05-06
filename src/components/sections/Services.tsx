import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { services_raw_data } from "../../utils/services-data";
import { Card_Design } from "../cards/Service_card";


export const Services = () =>{
    return <section id="services_anchor">
        <Container className="space-y-10 md:space-y-12 ">
            <div className=" text-center max-w-3xl mx-auto space-y-4  ">
                <Title>
                    Our AI Services
                    <Paragraph className="mt-8">
                        Unlock the potential of advanced machine learning, natural language
                        processing, and predictive analytics. Our services include:
                    </Paragraph>
                </Title>
            </div>
            {/* here we want to loop thru the list of services */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 flex-grow ">
                {services_raw_data.map((service_data_value, key)=>(
                    <Card_Design
                    key={key}
                    title={service_data_value.title} 
                    description={service_data_value.description} 
                    icon={service_data_value.icon} />
                ))}
            </div>
        </Container>
    </section>
}