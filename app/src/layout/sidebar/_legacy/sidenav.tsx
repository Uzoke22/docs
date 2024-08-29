'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useIsInsideMobileNavigation } from '@/lib/mobile';
import { navigation } from '#/config/navigation';

import { NavigationGroup } from './navgroup';

export const Navigation = (_properties) => {
    const pathname = usePathname();
    const isInsideMobileNavigation = useIsInsideMobileNavigation();

    // const isDAO = pathname.match(/\/dao/);

    const activeNavigation = navigation['protocol'];

    // const activeSection = activeNavigation.find((group) => {
    //     return group.activePattern.test(pathname);
    // });

    return (
        <nav className="flex h-full flex-col">
            <div className="scrollbar flex size-full flex-col justify-between overflow-auto py-2">
                {/* <ul className="border-ens-light-border dark:border-ens-dark-border w-full border-b px-[16px] pb-2">
                    {activeNavigation.map((section, sectionIndex) => (
                        <li key={section.name} className="">
                            <Link
                                href={section.href}
                                className={clsx(
                                    'text-ens-light-text-secondary dark:text-ens-light-text-secondary flex w-full items-center gap-2 rounded-md p-2 text-sm',
                                    section.activePattern.test(pathname)
                                        ? 'bg-ens-light-grey-surface dark:bg-ens-dark-background-surface dark:bg-ens-dark-blue-surface'
                                        : 'bg-ens-light-background-primary dark:bg-ens-dark-background-primary'
                                )}
                            >
                                <span className="text-md aspect-square">
                                    {section.icon}
                                </span>
                                <span>{section.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul> */}
                {/* {activeSection?.href == section.href && ( */}
                {activeNavigation.map((activeSection, _sectionIndex) => (
                    <div className="" style={{ fontFamily: 'Satoshi' }}>
                        <div className="px-2 font-bold">
                            <Link
                                href={activeSection.href}
                                className="hover:bg-ens-light-background-secondary dark:hover:bg-ens-dark-background-secondary flex w-full rounded-md px-2"
                            >
                                {activeSection.name}
                            </Link>
                        </div>
                        <ul className="mb-4 px-3">
                            {!!activeSection && isInsideMobileNavigation && (
                                <li className="text-ens-light-text-primary dark:text-ens-dark-text-primary mb-2 text-sm font-medium">
                                    {activeSection.name}
                                </li>
                            )}
                            {activeSection?.links.map((group) => (
                                <NavigationGroup
                                    key={group.title}
                                    group={group}
                                    className="border-b-ens-light-border dark:border-b-ens-dark-border border-b py-2 last:border-b-0"
                                />
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="px-6 text-sm">ENS Documentation (Alpha)</div>
                {/* )} */}
            </div>
        </nav>
    );
};
