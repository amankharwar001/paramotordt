export default function Homecard() {
    return (
        <div className="max-w-sm mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-32 object-cover" src="https://openui.fly.dev/openui/600x200.svg" alt="User holding a credit card" />
            <div className="p-6">
                <h2 className="text-2xl font-bold text-center text-primary">Green</h2>
                <p className="text-muted-foreground text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <hr className="my-4 border-border" />
                <p className="text-center text-muted">Only Your Current to <strong>USD</strong></p>
                <p className="text-center text-muted">Only Valid on <strong>Your Country</strong></p>
                <p className="text-center text-muted">Unlimited <strong>Transaction</strong></p>
                <div className="mt-6">
                    <button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 py-2 rounded-lg">Get Started</button>
                </div>
            </div>
        </div>
    )
}