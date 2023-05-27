import { Configuration, LoginResponse, SecurityApi } from "@/client"
import InputField from "@/components/InputField"

const Login = () => {

    const login = async () => {
        const config = new Configuration
        const client = new SecurityApi(config)
        client.login({username: "", password: ""})
            .then((response) =>{
                localStorage.setItem("foot-token",response.data.token as string)
            })
            .catch((error) => console.log(error.response.data))
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form>
                    <InputField type="text" id="username" label="Username"/>
                    <div className="mt-6">
                        <InputField type="password" id="password" label="Password" />
                    </div>
                    <div className="mt-6">
                        <button type="submit" 
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    You are new? 
                    <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Register now</a>
                </p>
            </div>
        </div>
    )
}

export default Login