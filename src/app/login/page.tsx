import { LoginForm } from './form';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0c2928] to-[#2d918d]">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-600 mb-1">Bem-vindo!</h1>
        <p className="text-center text-gray-600 mb-6">Faça login para continuar</p>
        <LoginForm />
      </div>
    </div>
  );
}
