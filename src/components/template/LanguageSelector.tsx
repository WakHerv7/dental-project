import { useMemo, useState } from 'react'
import Avatar from '@/components/ui/Avatar'
import Dropdown from '@/components/ui/Dropdown'
import Spinner from '@/components/ui/Spinner'
import classNames from 'classnames'
import withHeaderItem from '@/utils/hoc/withHeaderItem'
import { setLang, useAppSelector, useAppDispatch } from '@/store'
import { dateLocales } from '@/locales'
import dayjs from 'dayjs'
// eslint-disable-next-line import/no-named-as-default
import i18n from 'i18next'
import { HiCheck, HiOutlineChevronDown } from 'react-icons/hi'
import type { CommonProps } from '@/@types/common'
import { Button } from '../ui'

const languageList = [
    { label: 'Français', value: 'fr', flag: 'fr' },
    { label: 'English', value: 'en', flag: 'us' }
]

const _LanguageSelector = ({ className }: CommonProps) => {
    const [loading, setLoading] = useState(false)
    const locale = useAppSelector((state) => state.locale.currentLang)
    const dispatch = useAppDispatch()

    const selectLangFlag = useMemo(() => {
        return languageList.find((lang) => lang.value === locale)?.flag
    }, [locale])
    const selectLang = useMemo(() => {
        return languageList.find((lang) => lang.value === locale)?.label
    }, [locale])
    const selectedLanguage = (
        <div className={classNames(className, 'flex items-center')}>
            {loading ? (
                <Spinner size={20} />
            ) : (
                <Button flatted className='flex items-center gap-2 px-2'><Avatar
                size={24}
                className='bg-transparent'
                src={`/img/countries/${selectLangFlag}.png`}
            />
            <span className='mr-5'>{selectLang}</span>
            
            <HiOutlineChevronDown className='text-xl' />
            </Button>
            )}
        </div>
    )

    const onLanguageSelect = (lang: string) => {
        const formattedLang = lang.replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase()
        })

        setLoading(true)

        const dispatchLang = () => {
            i18n.changeLanguage(formattedLang)
            dispatch(setLang(lang))
            setLoading(false)
        }

        dateLocales[formattedLang]()
            .then(() => {
                dayjs.locale(formattedLang)
                dispatchLang()
            })
            .catch(() => {
                dispatchLang()
            })
    }

    return (
        <div>
        <Dropdown renderTitle={selectedLanguage} placement="bottom-end">
            {languageList.map((lang) => (
                <Dropdown.Item
                    key={lang.label}
                    className="mb-1 justify-between"
                    eventKey={lang.label}
                    onClick={() => onLanguageSelect(lang.value)}
                >
                    <span className="flex items-center">
                        <Avatar
                            size={18}
                            shape="circle"
                            src={`/img/countries/${lang.flag}.png`}
                        />
                        <span className="ltr:ml-2 rtl:mr-2">{lang.label}</span>
                    </span>
                    {locale === lang.value && (
                        <HiCheck className="text-emerald-500 text-lg" />
                    )}
                </Dropdown.Item>
            ))}
        </Dropdown>
        </div>
    )
}

const LanguageSelector = withHeaderItem(_LanguageSelector)

export default LanguageSelector
