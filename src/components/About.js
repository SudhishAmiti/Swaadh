import UserClass from "./UserClass";
const About = () => {
    return(
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold px-2">ABOUT</h1>
            <div className="px-4">This is a food ordering app...
                where you find your favourite food and can order any time you  satisfy you calories and cravings....
            </div>
           <UserClass name="Amiti Sudhish" desg="web developer" about="hii there i am a tech enthusiast"/>
        </div>
    );
}
export default About;