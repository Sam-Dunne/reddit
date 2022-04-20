import styles from './navbar.module.css';
import { FormEventHandler, useState } from 'react';
import { useRouter } from 'next/router';
import { ALL_POSTS, isEmpty } from '../../utils';

export default function Navbar() {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        if (isEmpty(search) || search === ALL_POSTS) {
            router.push(`/`);
        } else {
            router.push(`/?s=${search}`);
        }
    }

    return (
        <nav className={`${styles.nav} bg-white`}>
            <div className="maw-width-7xl sm:mx-2 md:mx-auto sm:px-4 lg:px-8 lg:divide-y lg:divide-gray-200">
                <div className="relative h-16 flex justify-around px-2">
                    <div className="relative z-10 px-2 flex lg:px-0">
                        <div className="flex-shrink-0 flex items-center">
                            <a target='blank' href='https://sub-reddit-g022714zd-sam-dunne.vercel.app/' rel='noopener noreferrer'>
                                <img
                                    className="block h-8 w-auto"
                                    src="/logos/subreddit.png"
                                    alt="subreddit logo"
                                />
                            </a>
                        </div>
                    </div>
                    <div className='flex items-center justify-center flex-1'>
                        <form className='w-full max-w-lg' onSubmit={onSubmit}>
                            <input className='block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-indigo-300' type="search" placeholder='search Subreddits' value={search} onChange={(e) => setSearch(e.currentTarget.value)}>
                            </input>
                        </form>
                        {/* <div className='mx-auto border-gray-400 border-4'> */}
                        {/* </div> */}
                        <button className='p-2 border-gray-300 border-2 text-sm my-4 ml-1 lg:mr-16 border border-gray-300 rounded-md active:bg-gray-400' onClick={onSubmit}>Search</button>
                    </div>
                    {/* <div className='flex items-center justify-self-start max-w-sm flex-1'> */}
                    {/* </div> */}
                </div>
            </div>
        </nav>
    );
}
