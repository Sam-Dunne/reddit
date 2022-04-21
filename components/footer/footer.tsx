import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className="bg-white absolute left-0 bottom-0 w-full z-50">
            <div className='w-8 flex items-center justify-center mx-auto pt-2'>
                <a href='https://github.com/Sam-Dunne/reddit' target='blank' rel='noopener norefferer'>
                    <img src="/favicon/GitHub-Mark-120px-plus.png"></img>
                </a>
            </div>
            <div className="text-center h-10 px-2 sm:px-6 lg:px-8 flex items-center justify-center">
                <span className="text-xs">©Copyright 2022</span>
            </div>
        </footer>
    );
}
