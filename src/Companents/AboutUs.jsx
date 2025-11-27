import React from 'react'

function AboutUs() {
    return (
        <>
            <div className="bg-[url('/image/About.png')] bg-cover bg-center h-[599px] flex justify-center items-center text-center" >

                <h2 className='text-[49px] font-semibold text-white w-[710px]'>We Create Bunch Of Enthusiastic & Creative Minds</h2>

            </div>
            <div className='max-w-[1440px]  mx-auto mt-[70px] space-y-[70px] px-[20px] md:px-2 lg:px-3 2xl:px-0 mb-10'>
                <div className='max-w-[1440px]  mx-auto mt-[70px]'>
                    <h2 className=' text-[37px] font-medium'>About Us</h2>
                    <p className='text-[18px] w-[335px] md:w-[831px]'>Tenzor Soft LLC is a leading software developer in Uzbekistan, operating in the IT services market since 2008.
                        For over 15 years, we have established ourselves as a reliable partner in digital technologies, offering innovative
                        solutions for business process automation, web application development, and corporate systems.</p>
                </div>

                <div className=' flex flex-col xl:flex-row space-y-5 justify-between items-start'>
                    <div className='flex gap-[20px]'>
                        <div className="bg-[#FBBF0A] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                            <img src="/logo/services.png" className="w-[32px] h-[27px]" />
                        </div>
                        <div>
                            <h2 className='w-[170px] text-[22px] font-medium'>Effective project management</h2>
                            <p className='w-[265px]'>Full support of projects using modern methodologies and</p>
                        </div>
                    </div>
                    <div className='flex gap-[20px]'>
                        <div className="bg-[#3BCEAC] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                            <img src="/logo/services4.png" className="w-[32px] h-[27px]" />
                        </div>
                        <div>
                            <h2 className='w-[211px]  text-[22px] font-medium'>Cross-platform and responsive design</h2>
                            <p className='w-[211px]'>We create designs that look flawless on any</p>
                        </div>
                    </div>
                    <div className='flex gap-[20px]'>
                        <div className="bg-[#43A7FC] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                            <img src="/logo/services2.png" className="w-[32px] h-[27px]" />
                        </div>
                        <div>
                            <h2 className='w-[160px]  text-[22px]  font-medium'>Monitoring and time tracking</h2>
                            <p className='w-[245px]'>Accurate solutions for time tracking and productivity improvement</p>
                        </div>
                    </div>
                    <div className='flex gap-[20px]'>
                        <div className="bg-[#D1345B] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                            <img src="/logo/services3.png" className="w-[32px] h-[27px]" />
                        </div>
                        <div className='w-[136px]'>
                            <h2 className='w-[240px] text-[22px]  font-medium'>Creating innovative mobile applications</h2>
                            <p className='w-[246px]'>We develop custom mobile solutions that stand out in the market.</p>
                        </div>
                    </div>
                </div>

                <div className='space-y-5'>
                    <p className='text-[18px]'>Наш штат включает более 30 квалифицированных специалистов, среди которых:</p>
                    <div className='ml-5'>
                        <li className='text-[18px] flex gap-1'><p className='font-medium'>Front-end разработчики </p>  — создают удобные и современные пользовательские интерфейсы.</li>
                        <li className='text-[18px] flex gap-1'><p className='font-medium'>Back-end разработчики</p> — обеспечивают надежную серверную часть и взаимодействие с базами данных.</li>
                        <li className='text-[18px] flex gap-1'><p className='font-medium'>Эксперты по автоматизации бизнеса</p> — помогают компаниям интегрировать современные IT-решения для повышения эффективности работы.</li>
                        <li className='text-[18px] flex gap-1'><p className='font-medium'>Администраторы систем</p> — обеспечивают бесперебойную работу инфраструктуры и поддерживают стабильность сервисов.</li>
                        <li className='text-[18px] flex gap-1'><p className='font-medium'>Проект-менеджеры</p> — управляют процессами разработки, координируют работу команд и обеспечивают своевременное выполнение проектов.</li>
                    </div>

                    <p className='text-[18px]'> Мы гордимся нашим профессионализмом и опытом, который позволяет нам выполнять задачи любого уровня сложности — от создания небольших веб-приложений до автоматизации крупных производственных и торговых предприятий. Наша миссия — помогать бизнесам развиваться с помощью современных технологий, внедряя индивидуальные решения, которые соответствуют потребностям клиентов. </p>
                    <p className='text-[18px]'> В ООО “Tenzor Soft” мы уделяем внимание качеству и долгосрочному партнерству. Каждый проект для нас — это возможность предложить клиенту решение, которое облегчит его бизнес и позволит ему сосредоточиться на росте и развитии.</p>
                    <p className='text-[18px]'> Свяжитесь с нами, чтобы узнать больше о том, как мы можем помочь вашему бизнесу шагнуть в будущее с помощью инновационных IT-решений.</p>
                </div>
            </div>
        </>
    )
}

export default AboutUs