/* El código a continuación es propiedad intelectual de The Mail Track Company S.L. de Barcelona, España,
y solo debe ser utilizado y manejado bajo estos Términos: https://mailtrack.io/es/terms

The code hereafter is the intellectual property of The Mail Track Company S.L. of Barcelona, Spain
and must be used and handled only according to these Terms: https://mailtrack.io/en/terms */

(function () {
    'use strict';

    var inject = document.createElement('script');

    inject.textContent = atob(`IWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIG4odSl7aWYodFt1XSlyZXR1cm4gdFt1XS5leHBvcnRzO3ZhciByPXRbdV09e2k6dSxsOiExLGV4cG9ydHM6e319O3JldHVybiBlW3VdLmNhbGwoci5leHBvcnRzLHIsci5leHBvcnRzLG4pLHIubD0hMCxyLmV4cG9ydHN9dmFyIHQ9e307bi5tPWUsbi5jPXQsbi5pPWZ1bmN0aW9uKGUpe3JldHVybiBlfSxuLmQ9ZnVuY3Rpb24oZSx0LHUpe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6dX0pfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZCh0LCJhIix0KSx0fSxuLm89ZnVuY3Rpb24oZSxuKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbil9LG4ucD0iIixuKG4ucz0zOTIpfSh7MTA2OmZ1bmN0aW9uKGUsbix0KXsidXNlIHN0cmljdCI7bi5hPShlPT57Y29uc3Qgbj17fSx0PWUuc2xpY2UoZS5pbmRleE9mKCI/IikrMSkuc3BsaXQoIiYiKTtmb3IobGV0IGU9MDtlPHQubGVuZ3RoO2UrKyl7Y29uc3QgdT10W2VdLnNwbGl0KCI9Iik7bltkZWNvZGVVUklDb21wb25lbnQodVswXSldPWRlY29kZVVSSUNvbXBvbmVudCh1WzFdKX1yZXR1cm4gbn0pfSwxNDpmdW5jdGlvbihlLG4sdCl7ZnVuY3Rpb24gdShlKXt2YXIgbix0PXt9LHU9ZS5zcGxpdChoKTtpZihsLnRlc3QodVswXSk/KHQuZGF0ZT1udWxsLG49dVswXSk6KHQuZGF0ZT11WzBdLG49dVsxXSksbil7dmFyIHI9Qy5leGVjKG4pO3I/KHQudGltZT1uLnJlcGxhY2UoclsxXSwiIiksdC50aW1lem9uZT1yWzFdKTp0LnRpbWU9bn1yZXR1cm4gdH1mdW5jdGlvbiByKGUsbil7dmFyIHQsdT1wW25dLHI9dltuXTtpZih0PWcuZXhlYyhlKXx8ci5leGVjKGUpKXt2YXIgbz10WzFdO3JldHVybnt5ZWFyOnBhcnNlSW50KG8sMTApLHJlc3REYXRlU3RyaW5nOmUuc2xpY2Uoby5sZW5ndGgpfX1pZih0PW0uZXhlYyhlKXx8dS5leGVjKGUpKXt2YXIgYT10WzFdO3JldHVybnt5ZWFyOjEwMCpwYXJzZUludChhLDEwKSxyZXN0RGF0ZVN0cmluZzplLnNsaWNlKGEubGVuZ3RoKX19cmV0dXJue3llYXI6bnVsbH19ZnVuY3Rpb24gbyhlLG4pe2lmKG51bGw9PT1uKXJldHVybiBudWxsO3ZhciB0LHUscixvO2lmKDA9PT1lLmxlbmd0aClyZXR1cm4odT1uZXcgRGF0ZSgwKSkuc2V0VVRDRnVsbFllYXIobiksdTtpZih0PUEuZXhlYyhlKSlyZXR1cm4gdT1uZXcgRGF0ZSgwKSxyPXBhcnNlSW50KHRbMV0sMTApLTEsdS5zZXRVVENGdWxsWWVhcihuLHIpLHU7aWYodD1ELmV4ZWMoZSkpe3U9bmV3IERhdGUoMCk7dmFyIGE9cGFyc2VJbnQodFsxXSwxMCk7cmV0dXJuIHUuc2V0VVRDRnVsbFllYXIobiwwLGEpLHV9aWYodD14LmV4ZWMoZSkpe3U9bmV3IERhdGUoMCkscj1wYXJzZUludCh0WzFdLDEwKS0xO3ZhciBzPXBhcnNlSW50KHRbMl0sMTApO3JldHVybiB1LnNldFVUQ0Z1bGxZZWFyKG4scixzKSx1fXJldHVybih0PUUuZXhlYyhlKSk/KG89cGFyc2VJbnQodFsxXSwxMCktMSxpKG4sbykpOih0PWIuZXhlYyhlKSk/aShuLG89cGFyc2VJbnQodFsxXSwxMCktMSxwYXJzZUludCh0WzJdLDEwKS0xKTpudWxsfWZ1bmN0aW9uIGEoZSl7dmFyIG4sdCx1O2lmKG49TS5leGVjKGUpKXJldHVybih0PXBhcnNlRmxvYXQoblsxXS5yZXBsYWNlKCIsIiwiLiIpKSklMjQqZDtpZihuPXkuZXhlYyhlKSlyZXR1cm4gdD1wYXJzZUludChuWzFdLDEwKSx1PXBhcnNlRmxvYXQoblsyXS5yZXBsYWNlKCIsIiwiLiIpKSx0JTI0KmQrdSpGO2lmKG49Uy5leGVjKGUpKXt0PXBhcnNlSW50KG5bMV0sMTApLHU9cGFyc2VJbnQoblsyXSwxMCk7dmFyIHI9cGFyc2VGbG9hdChuWzNdLnJlcGxhY2UoIiwiLCIuIikpO3JldHVybiB0JTI0KmQrdSpGKzFlMypyfXJldHVybiBudWxsfWZ1bmN0aW9uIHMoZSl7dmFyIG4sdDtyZXR1cm4obj1ULmV4ZWMoZSkpPzA6KG49ay5leGVjKGUpKT8odD02MCpwYXJzZUludChuWzJdLDEwKSwiKyI9PT1uWzFdPy10OnQpOihuPUkuZXhlYyhlKSk/KHQ9NjAqcGFyc2VJbnQoblsyXSwxMCkrcGFyc2VJbnQoblszXSwxMCksIisiPT09blsxXT8tdDp0KTowfWZ1bmN0aW9uIGkoZSxuLHQpe249bnx8MCx0PXR8fDA7dmFyIHU9bmV3IERhdGUoMCk7dS5zZXRVVENGdWxsWWVhcihlLDAsNCk7dmFyIHI9NypuK3QrMS0odS5nZXRVVENEYXkoKXx8Nyk7cmV0dXJuIHUuc2V0VVRDRGF0ZSh1LmdldFVUQ0RhdGUoKStyKSx1fXZhciBjPXQoNTMpLGQ9MzZlNSxGPTZlNCxmPTIsaD0vW1QgXS8sbD0vOi8sbT0vXihcZHsyfSkkLyxwPVsvXihbKy1dXGR7Mn0pJC8sL14oWystXVxkezN9KSQvLC9eKFsrLV1cZHs0fSkkL10sZz0vXihcZHs0fSkvLHY9Wy9eKFsrLV1cZHs0fSkvLC9eKFsrLV1cZHs1fSkvLC9eKFsrLV1cZHs2fSkvXSxBPS9eLShcZHsyfSkkLyxEPS9eLT8oXGR7M30pJC8seD0vXi0/KFxkezJ9KS0/KFxkezJ9KSQvLEU9L14tP1coXGR7Mn0pJC8sYj0vXi0/VyhcZHsyfSktPyhcZHsxfSkkLyxNPS9eKFxkezJ9KFsuLF1cZCopPykkLyx5PS9eKFxkezJ9KTo/KFxkezJ9KFsuLF1cZCopPykkLyxTPS9eKFxkezJ9KTo/KFxkezJ9KTo/KFxkezJ9KFsuLF1cZCopPykkLyxDPS8oW1orLV0uKikkLyxUPS9eKFopJC8saz0vXihbKy1dKShcZHsyfSkkLyxJPS9eKFsrLV0pKFxkezJ9KTo/KFxkezJ9KSQvO2UuZXhwb3J0cz1mdW5jdGlvbihlLG4pe2lmKGMoZSkpcmV0dXJuIG5ldyBEYXRlKGUuZ2V0VGltZSgpKTtpZigic3RyaW5nIiE9dHlwZW9mIGUpcmV0dXJuIG5ldyBEYXRlKGUpO3ZhciB0PShufHx7fSkuYWRkaXRpb25hbERpZ2l0czt0PW51bGw9PXQ/ZjpOdW1iZXIodCk7dmFyIGk9dShlKSxkPXIoaS5kYXRlLHQpLGg9ZC55ZWFyLGw9byhkLnJlc3REYXRlU3RyaW5nLGgpO2lmKGwpe3ZhciBtLHA9bC5nZXRUaW1lKCksZz0wO3JldHVybiBpLnRpbWUmJihnPWEoaS50aW1lKSksaS50aW1lem9uZT9tPXMoaS50aW1lem9uZSk6KG09bmV3IERhdGUocCtnKS5nZXRUaW1lem9uZU9mZnNldCgpLG09bmV3IERhdGUocCtnK20qRikuZ2V0VGltZXpvbmVPZmZzZXQoKSksbmV3IERhdGUocCtnK20qRil9cmV0dXJuIG5ldyBEYXRlKGUpfX0sMjc6ZnVuY3Rpb24oZSxuLHQpe3ZhciB1PXQoNTcpLHI9dCg1OCk7ZS5leHBvcnRzPXtkaXN0YW5jZUluV29yZHM6dSgpLGZvcm1hdDpyKCl9fSwzOTI6ZnVuY3Rpb24oZSxuLHQpeyJ1c2Ugc3RyaWN0IjtPYmplY3QuZGVmaW5lUHJvcGVydHkobiwiX19lc01vZHVsZSIse3ZhbHVlOiEwfSk7dmFyIHU9dCg2KSxyPXQoMTA2KTshZnVuY3Rpb24oZSl7ZnVuY3Rpb24gbihlLHQpe2lmKCF0Lmxlbmd0aClyZXR1cm4hMDt2YXIgdT1lW3Quc2xpY2UoMCwxKV07cmV0dXJuIG51bGwhPXUmJm4odSx0LnNsaWNlKDEpKX1mdW5jdGlvbiBvKGUpe3JldHVybiBlWzJdWzZdLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gbihlLFsiMSIsIjMiLCI3IiwiMSJdKX0pLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZVsxXVszXVs3XVsxXX0pfXZhciBhPWZ1bmN0aW9uKCl7dmFyIGU9e307ZS5oYXNoPWZ1bmN0aW9uKHQsdSl7KHU9dm9pZCAwPT09dXx8dSkmJih0PW4uZW5jb2RlKHQpKTtmb3IodmFyIHI9WzE1MTg1MDAyNDksMTg1OTc3NTM5MywyNDAwOTU5NzA4LDMzOTU0Njk3ODJdLG89KHQrPVN0cmluZy5mcm9tQ2hhckNvZGUoMTI4KSkubGVuZ3RoLzQrMixhPU1hdGguY2VpbChvLzE2KSxzPW5ldyBBcnJheShhKSxpPTA7aTxhO2krKyl7c1tpXT1uZXcgQXJyYXkoMTYpO2Zvcih2YXIgYz0wO2M8MTY7YysrKXNbaV1bY109dC5jaGFyQ29kZUF0KDY0KmkrNCpjKTw8MjR8dC5jaGFyQ29kZUF0KDY0KmkrNCpjKzEpPDwxNnx0LmNoYXJDb2RlQXQoNjQqaSs0KmMrMik8PDh8dC5jaGFyQ29kZUF0KDY0KmkrNCpjKzMpfXNbYS0xXVsxNF09OCoodC5sZW5ndGgtMSkvTWF0aC5wb3coMiwzMiksc1thLTFdWzE0XT1NYXRoLmZsb29yKHNbYS0xXVsxNF0pLHNbYS0xXVsxNV09OCoodC5sZW5ndGgtMSkmNDI5NDk2NzI5NTtmb3IodmFyIGQsRixmLGgsbCxtPTE3MzI1ODQxOTMscD00MDIzMjMzNDE3LGc9MjU2MjM4MzEwMix2PTI3MTczMzg3OCxBPTMyODUzNzc1MjAsRD1uZXcgQXJyYXkoODApLGk9MDtpPGE7aSsrKXtmb3IoeD0wO3g8MTY7eCsrKURbeF09c1tpXVt4XTtmb3IoeD0xNjt4PDgwO3grKylEW3hdPWUuUk9UTChEW3gtM11eRFt4LThdXkRbeC0xNF1eRFt4LTE2XSwxKTtkPW0sRj1wLGY9ZyxoPXYsbD1BO2Zvcih2YXIgeD0wO3g8ODA7eCsrKXt2YXIgRT1NYXRoLmZsb29yKHgvMjApLGI9ZS5ST1RMKGQsNSkrZS5mKEUsRixmLGgpK2wrcltFXStEW3hdJjQyOTQ5NjcyOTU7bD1oLGg9ZixmPWUuUk9UTChGLDMwKSxGPWQsZD1ifW09bStkJjQyOTQ5NjcyOTUscD1wK0YmNDI5NDk2NzI5NSxnPWcrZiY0Mjk0OTY3Mjk1LHY9ditoJjQyOTQ5NjcyOTUsQT1BK2wmNDI5NDk2NzI5NX1yZXR1cm4gZS50b0hleFN0cihtKStlLnRvSGV4U3RyKHApK2UudG9IZXhTdHIoZykrZS50b0hleFN0cih2KStlLnRvSGV4U3RyKEEpfSxlLmY9ZnVuY3Rpb24oZSxuLHQsdSl7c3dpdGNoKGUpe2Nhc2UgMDpyZXR1cm4gbiZ0Xn5uJnU7Y2FzZSAxOnJldHVybiBuXnRedTtjYXNlIDI6cmV0dXJuIG4mdF5uJnVedCZ1O2Nhc2UgMzpyZXR1cm4gbl50XnV9fSxlLlJPVEw9ZnVuY3Rpb24oZSxuKXtyZXR1cm4gZTw8bnxlPj4+MzItbn0sZS50b0hleFN0cj1mdW5jdGlvbihlKXtmb3IodmFyIG49IiIsdD03O3Q+PTA7dC0tKW4rPShlPj4+NCp0JjE1KS50b1N0cmluZygxNik7cmV0dXJuIG59O3ZhciBuPXt9O3JldHVybiBuLmVuY29kZT1mdW5jdGlvbihlKXt2YXIgbj1lLnJlcGxhY2UoL1tcdTAwODAtXHUwN2ZmXS9nLGZ1bmN0aW9uKGUpe3ZhciBuPWUuY2hhckNvZGVBdCgwKTtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgxOTJ8bj4+NiwxMjh8NjMmbil9KTtyZXR1cm4gbj1uLnJlcGxhY2UoL1tcdTA4MDAtXHVmZmZmXS9nLGZ1bmN0aW9uKGUpe3ZhciBuPWUuY2hhckNvZGVBdCgwKTtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgyMjR8bj4+MTIsMTI4fG4+PjYmNjMsMTI4fDYzJm4pfSl9LG4uZGVjb2RlPWZ1bmN0aW9uKGUpe3ZhciBuPWUucmVwbGFjZSgvW1x1MDBlMC1cdTAwZWZdW1x1MDA4MC1cdTAwYmZdW1x1MDA4MC1cdTAwYmZdL2csZnVuY3Rpb24oZSl7dmFyIG49KDE1JmUuY2hhckNvZGVBdCgwKSk8PDEyfCg2MyZlLmNoYXJDb2RlQXQoMSkpPDw2fDYzJmUuY2hhckNvZGVBdCgyKTtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShuKX0pO3JldHVybiBuPW4ucmVwbGFjZSgvW1x1MDBjMC1cdTAwZGZdW1x1MDA4MC1cdTAwYmZdL2csZnVuY3Rpb24oZSl7dmFyIG49KDMxJmUuY2hhckNvZGVBdCgwKSk8PDZ8NjMmZS5jaGFyQ29kZUF0KDEpO3JldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKG4pfSl9LGZ1bmN0aW9uKG4pe2Z1bmN0aW9uIHUoZSl7aWYoMD09PWUuaW5kZXhPZihmKSl7dmFyIG49dC5pKHIuYSkoZSk7bi51cmwmJihlPW4udXJsKX1yZXR1cm4gZX1mdW5jdGlvbiBvKG4sdCl7cmV0dXJuIGUuaGFzaCh0Lm1haWwrbisobmV3IERhdGUpLnRvSVNPU3RyaW5nKCkpfWZ1bmN0aW9uIGEoZSxuKXt2YXIgdD1lLmdldEF0dHJpYnV0ZSgiaHJlZiIpLHI9e29yaWdpbmFsVXJsOnQsdGV4dDplLnRleHQsc2hvdWxkVHJhY2s6ITF9O3JldHVybiBGKGUpfHwoci51cmw9dSh0KSxyLmhhc2g9byhyLnVybCxuKSxyLnNob3VsZFRyYWNrPSEwKSxyfWZ1bmN0aW9uIHMobix0KXtyZXR1cm4gZS5oYXNoKGUuaGFzaChuKStlLmhhc2godCkpLnN1YnN0cigwLDE2KX1mdW5jdGlvbiBpKGUsbix0KXt2YXIgdT1zKGUsbikscj1lbmNvZGVVUklDb21wb25lbnQodC5pZCksbz1lbmNvZGVVUklDb21wb25lbnQobik7cmV0dXJuYCR7Zn0ke2V9P3VybD0ke299JnVzZXJJZD0ke3J9JnNpZ25hdHVyZT0ke3V9YH1mdW5jdGlvbiBjKGUsbil7cmV0dXJuIE9iamVjdC5rZXlzKGUpLm1hcChmdW5jdGlvbih0KXt2YXIgdT1lW3RdO2lmKCJzdHJpbmciPT10eXBlb2YgdSl7dmFyIHI9ZCh1LG4pO3JldHVybiBlW3RdPXIucmVwbGFjZWRTdHJpbmcsci5saW5rc31pZigwIT09T2JqZWN0LmtleXModSkubGVuZ3RoKXJldHVybiBjKHUsbil9KS5yZWR1Y2UoZnVuY3Rpb24oZSxuKXtyZXR1cm4gZT1lLmNvbmNhdChuKX0sW10pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwIT09ZX0pfWZ1bmN0aW9uIGQoZSxuKXt2YXIgdCx1PVtdO3JldHVybntyZXBsYWNlZFN0cmluZzplLnJlcGxhY2UobCxmdW5jdGlvbihlKXt2YXIgcj0obmV3IERPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGUsInRleHQvaHRtbCIpLmRvY3VtZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCJhIik7cmV0dXJuKHQ9YShyLG4pKS5zaG91bGRUcmFjayYmKHIuc2V0QXR0cmlidXRlKCJocmVmIixpKHQuaGFzaCx0LnVybCxuKSksci5yZW1vdmVBdHRyaWJ1dGUoImRhdGEtc2FmZXJlZGlyZWN0dXJsIiksdS5wdXNoKHQpKSxyLm91dGVySFRNTH0sITEpLGxpbmtzOnV9fWZ1bmN0aW9uIEYoZSl7cmV0dXJuLTEhPT1lLmdldEF0dHJpYnV0ZSgiaHJlZiIpLmluZGV4T2YoaCl8fC0xIT09KGUuZ2V0QXR0cmlidXRlKCJjbGFzcyIpfHwiIikuaW5kZXhPZigibXQtc2lnbmF0dXJlLWxvZ28iKX12YXIgZj1uLmxpbmtVcmwsaD1uLmluc3RhbGxVcmwsbD1uLmFuY2hvclJlZ2V4fHwvPGEgaHJlZj0iaHR0cHM/Oi4qPyIqPiguKj8pPFwvYT4vZztyZXR1cm57ZGVyZWZlcmVuY2VMaW5rOnUsZ2VuZXJhdGVMaW5rSGFzaDpvLGdldExpbmtUcmFja0RhdGE6YSxnZXRMaW5rVXJsOmkscmVwbGFjZUFuY2hvcnNJblN0cmluZzpkLG1hcExpbmtzVG9CYWNrZW5kU3RhbmRhcmQ6ZnVuY3Rpb24oZSl7cmV0dXJue3VybDplLnVybCxhbmNob3I6ZS50ZXh0LGhhc2g6ZS5oYXNofX0sdHJhY2tMaW5rc0luSnNvbjpjfX19KCk7ZS5PYnNlcnZlcj1mdW5jdGlvbigpe2Z1bmN0aW9uIG4oZSxuKXt2YXIgdCx1PVtdO2Rveyh0PW4uZXhlYyhlKSkmJnUucHVzaCh0KX13aGlsZSh0KTtyZXR1cm4gdX1mdW5jdGlvbiByKHQpe3JldHVybiBuKHQsbmV3IFJlZ0V4cChlLk9ic2VydmVyLlhIUl9SRVFVRVNUX1BJWEVMKSl9ZnVuY3Rpb24gbyh0KXtyZXR1cm4gbih0LG5ldyBSZWdFeHAoZS5PYnNlcnZlci5YSFJfUkVRVUVTVF9NU0dJRF9BTkRfUElYRUwpKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJue2luYm94SWQ6ZVsxXSxwaXhlbDplWzJdfX0pLnJlZHVjZShmdW5jdGlvbihlLG4pe3JldHVybiBlW24uaW5ib3hJZF09bixlfSx7fSl9ZnVuY3Rpb24gYShlKXtyZXR1cm4gZVsxXX1mdW5jdGlvbiBzKGUpe3JldHVybi0xPT09ZVswXS5pbmRleE9mKCIjcmVtb3ZlIil9ZnVuY3Rpb24gaShuKXt2YXIgdD1uWzBdWzJdLm1hdGNoKGUuT2JzZXJ2ZXIuWEhSX1JFUVVFU1RfUElYRUxfRVNDQVBFRCk7cmV0dXJue21haWw6bixwaXhlbElkOmEodCksaXNUcmFja2VkOnModCl9fWZ1bmN0aW9uIGMobil7aWYobi5pc1RyYWNrZWQpe3ZhciB0PWUuTGlua1RyYWNrZXIudHJhY2tMaW5rc0luSnNvbihuLm1haWwsZS5MaW5rVHJhY2tlci5jdXJyZW50VXNlcik7bi5saW5rcz10fXJldHVybiBufWZ1bmN0aW9uIGQobil7aWYoIWUuTGlua1RyYWNrZXIuc2hvdWxkVHJhY2tMaW5rcylyZXR1cm4gbjt2YXIgcj1KU09OLnBhcnNlKG4pO3JldHVybiByWzJdWzFdLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZVsyXVsyXVsxNF1bMV1bOV1bMl19KS5tYXAoaSkubWFwKGMpLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5pc1RyYWNrZWR9KS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3QuaSh1LmEpKGUuT2JzZXJ2ZXIuRVZFTlRfTkFNRVMubGlua3MuaGlqYWNrLHtsaW5rczpuLmxpbmtzLm1hcChlLkxpbmtUcmFja2VyLm1hcExpbmtzVG9CYWNrZW5kU3RhbmRhcmQpLGNvbXBvc2VJZDpuLnBpeGVsSWR9KX0pLEpTT04uc3RyaW5naWZ5KHIpfXZhciBGPXRoaXMsZj1YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3BlbixoPVhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kO1hNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKG4scil7dmFyIG89ci5tYXRjaChlLk9ic2VydmVyLlhIUl9VUkwpO2lmKG8pe3ZhciBhPWZ1bmN0aW9uKCl7aWYodGhpcy5jb21wb3NlSWRzKXt2YXIgbjtzd2l0Y2gob1sxXSl7Y2FzZSJzIjpuPUYucGFyc2VHbWFpbFNlbmRNYWlsUmVzcG9uc2VWMl8wKHRoaXMucmVzcG9uc2VUZXh0LHRoaXMuaW5ib3hJZFRvUGl4ZWxIYXNoKX1uJiZuLmxlbmd0aCYmdC5pKHUuYSkoZS5PYnNlcnZlci5FVkVOVF9OQU1FUy5zZW5kLmZpbmlzaCx7Y29udmVyc2F0aW9uTW9kZTohMCxkYXRhOm4sdW5kb1RpbWU6dm9pZCAwfSksdGhpcy5jb21wb3NlSWRzPW51bGx9dGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCJsb2FkIixhKX07dGhpcy5hZGRFdmVudExpc3RlbmVyKCJsb2FkIixhKX1yZXR1cm4gZi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kPWZ1bmN0aW9uKG4pe2lmKG4mJiEobiBpbnN0YW5jZW9mIEJsb2IpKXt2YXIgdD1yKG4pO3QmJnQubGVuZ3RoJiYodGhpcy5jb21wb3NlSWRzPXQubWFwKGEpLHRoaXMuaW5ib3hJZFRvUGl4ZWxIYXNoPW8obiksbj0obj1kKG4pKS5yZXBsYWNlKGUuT2JzZXJ2ZXIuWEhSX1JFUVVFU1RfUElYRUxfU0hPVUxEX05PVF9UUkFDSywiIikpLG49bi5yZXBsYWNlKGUuT2JzZXJ2ZXIuWEhSX1JFUVVFU1RfUElYRUxfUFJPWElFRCxmdW5jdGlvbihuLHQpe3JldHVybiBuLnJlcGxhY2UodCxlLk9ic2VydmVyLkRFQURfUElYRUwpfSwhMSksYXJndW1lbnRzWzBdPW59cmV0dXJuIGguYXBwbHkodGhpcyxhcmd1bWVudHMpfX0sZS5PYnNlcnZlci5FVkVOVF9OQU1FUz17bGlzdDp7cHJvZ3Jlc3M6ImluYm94LWNhY2hlLWxpc3QtcHJvZ3Jlc3MubXQiLGZpbmlzaDoiaW5ib3gtY2FjaGUtbGlzdC1maW5pc2gubXQifSx0aHJlYWQ6e3Byb2dyZXNzOiJpbmJveC1jYWNoZS10aHJlYWQtcHJvZ3Jlc3MubXQiLGZpbmlzaDoiaW5ib3gtY2FjaGUtdGhyZWFkLWZpbmlzaC5tdCJ9LHNlbmQ6e3Byb2dyZXNzOiJpbmJveC1jYWNoZS1zZW5kLXByb2dyZXNzLm10IixmaW5pc2g6ImluYm94LWNhY2hlLXNlbmQtZmluaXNoLm10In0saWRlbnRpdHk6e3Byb2dyZXNzOiJpbmJveC1jYWNoZS1pZGVudGl0eS1wcm9ncmVzcy5tdCIsZmluaXNoOiJpbmJveC1jYWNoZS1pZGVudGl0eS1maW5pc2gubXQifSxsaW5rczp7Y29uZmlnOiJtdC1saW5rLXRyYWNrLWNvbmZpZyIsaGlqYWNrOiJtdC1saW5rcy10cmFja2VkLWluLWhpamFjayJ9fSxlLk9ic2VydmVyLlhIUl9VUkw9L1wvc3luY1wvW2EtejAtOS9dKihzKVw/KD86W1x3LV0rPVtcdy1dKyYpP2M9XGQrLyxlLk9ic2VydmVyLlhIUl9USFJFQURfSUQ9L14oPzpnbWFpbDopP3RocmVhZC1bYS16XTpyPy0/KFxkKykkLyxlLk9ic2VydmVyLlhIUl9JTkJPWF9JRD0vXm1zZy1bYS16XTpyPy0/KFxkKykkLyxlLk9ic2VydmVyLlhIUl9SRVFVRVNUX1BJWEVMX0VTQ0FQRUQ9LzxpbWdcc1tePl0qP3NyY1xzKj1ccyoiaHR0cHM6XC9cL21haWx0cmFjay4oPzptZXxpbylcL3RyYWNlXC9tYWlsXC8oWzAtOWEtZl17NDB9KVwucG5nXD91PVxkKygjcmVtb3ZlKT8iW14+XSo/Pi8sZS5PYnNlcnZlci5YSFJfUkVRVUVTVF9QSVhFTD0vPGltZ1xzW14+XSo/c3JjXHMqPVxzKlxcImh0dHBzOlwvXC9tYWlsdHJhY2suKD86bWV8aW8pXC90cmFjZVwvbWFpbFwvKFswLTlhLWZdezQwfSlcLnBuZ1w/dT1cZCsoI3JlbW92ZSk/XFwiW14+XSo/Pi9nLGUuT2JzZXJ2ZXIuWEhSX1JFUVVFU1RfUElYRUxfU0hPVUxEX05PVF9UUkFDSz0vPGltZ1xzW14+XSo/c3JjXHMqPVxzKlxcImh0dHBzOlwvXC9tYWlsdHJhY2suKD86bWV8aW8pXC90cmFjZVwvbWFpbFwvKFswLTlhLWZdezQwfSlcLnBuZ1w/dT1cZCgjcmVtb3ZlKVxcIltePl0qPz4vZyxlLk9ic2VydmVyLlhIUl9SRVFVRVNUX01TR0lEX0FORF9QSVhFTD0vXCIobXNnLWEuKj8pXCIuKj88aW1nXHNbXj5dKj9zcmNccyo9XHMqXFwiaHR0cHM6XC9cL21haWx0cmFjay4oPzptZXxpbylcL3RyYWNlXC9tYWlsXC8oWzAtOWEtZl17NDB9KVwucG5nXD91PVxkKygjcmVtb3ZlKT9cXCJbXj5dKj8+L2csZS5PYnNlcnZlci5YSFJfUkVRVUVTVF9QSVhFTF9QUk9YSUVEPS88aW1nXHNbXj5dKj9zcmNccyo9XHMqXFwiKGh0dHBzOlwvXC9bYS16QS1aMC05XStcLmdvb2dsZXVzZXJjb250ZW50XC5jb21cL3Byb3h5XC9bYS16QS1aMC05PV8tXSsjaHR0cHM6XC9cL21haWx0cmFjay4oPzptZXxpbylcL3RyYWNlXC9tYWlsXC9bMC05YS1mXXs0MH0oPzpcZCpcLnBuZ3xcLnBuZ1w/dT1cZCspKVxcIltePl0qPz4vZyxlLk9ic2VydmVyLkRFQURfUElYRUw9ImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNyIsZS5PYnNlcnZlci5YSFJfTUVTU0FHRV9JRD0vXig8LipAbWFpbC5nbWFpbC5jb20+KSQvLGUuT2JzZXJ2ZXIucHJvdG90eXBlLnBhcnNlR21haWxTZW5kTWFpbFJlc3BvbnNlVjJfMD1mdW5jdGlvbihuLHQpe3ZhciB1PVtdO3RyeXt2YXIgcj1KU09OLnBhcnNlKG4pO3ImJm8ocikuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgcj1uWzVdLmxlbmd0aC0xLG89dFtuWzVdW3JdWzFdXS5waXhlbDt1LnB1c2goe3RocmVhZElkOm5bNF0ubWF0Y2goZS5PYnNlcnZlci5YSFJfVEhSRUFEX0lEKVsxXSxpbmJveElkOm5bNV1bcl1bMV0ubWF0Y2goZS5PYnNlcnZlci5YSFJfSU5CT1hfSUQpWzFdLG1lc3NhZ2VJZDpuWzVdW3JdWzE0XS5tYXRjaChlLk9ic2VydmVyLlhIUl9NRVNTQUdFX0lEKVsxXSxtYWlsSGFzaDpvfSl9KX1jYXRjaChlKXtjb25zb2xlLnRyYWNlKCJGYWlsZWQgdG8gcGFyc2Ugc2VuZCByZXNwb25zZSIsZSl9ZmluYWxseXtyZXR1cm4gdX19LGUuRW1haWxBbGlhc2VzRmV0Y2hlcj1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dC5pKHUuYikoZS5FbWFpbEFsaWFzZXNGZXRjaGVyLkVWRU5UX05BTUVTLnJlcXVlc3QsZnVuY3Rpb24oKXt3aW5kb3cuQlRfU2VyaWFsaXplZFNldHRpbmdzUHJvbWlzZS50aGVuKGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSl7aWYoIXUmJmUgaW5zdGFuY2VvZiBPYmplY3Qpe3ZhciBuO2ZvcihuIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShuKSYmKCI2Mzc3MzczMyI9PT1uP3U9ZVtuXVsxXTp0KGVbbl0pKX1lbHNlIGlmKGUgaW5zdGFuY2VvZiBBcnJheSl7dmFyIHI7Zm9yKHI9MDtyPGUubGVuZ3RoO3IrKyl0KGVbcl0pfX12YXIgdTt0cnl7aWYodChKU09OLnBhcnNlKGUpKSx1JiZ1Lmxlbmd0aCl7Zm9yKHZhciByPVtdLG89MDtvPHUubGVuZ3RoO28rKylyLnB1c2godVtvXVsyXSk7bi5kaXNwYXRjaChyKX19Y2F0Y2goZSl7Y29uc29sZS50cmFjZSgiRmFpbGVkIHRvIGNhcHR1cmUgYWxpYXNlczoiLGUpfX0pfSl9LGUuRW1haWxBbGlhc2VzRmV0Y2hlci5FVkVOVF9OQU1FUz17cmVxdWVzdDoiZW1haWwtYWxpYXNlcy1mZXRjaGVyLXJlcXVlc3QubXQiLHJlc3BvbnNlOiJlbWFpbC1hbGlhc2VzLWZldGNoZXItcmVzcG9uc2UubXQifSxlLkVtYWlsQWxpYXNlc0ZldGNoZXIucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQ9dS5hLGUuRW1haWxBbGlhc2VzRmV0Y2hlci5wcm90b3R5cGUuZGlzcGF0Y2g9ZnVuY3Rpb24obil7dGhpcy5kaXNwYXRjaEV2ZW50KGUuRW1haWxBbGlhc2VzRmV0Y2hlci5FVkVOVF9OQU1FUy5yZXNwb25zZSx7ZGF0YTpufSl9LGUuUHVzaFN0YXRlQ2hhbmdlRW1pdG9yPWZ1bmN0aW9uKCl7dmFyIGU9d2luZG93Lmhpc3Rvcnksbj1lLnB1c2hTdGF0ZTtlLnB1c2hTdGF0ZT1mdW5jdGlvbihyKXtyZXR1cm4iZnVuY3Rpb24iPT10eXBlb2YgZS5vbnB1c2hzdGF0ZSYmZS5vbnB1c2hzdGF0ZSh7c3RhdGU6cn0pLHQuaSh1LmEpKCJpbmJveC1wdXNoc3RhdGUtY2hhbmdlLm10Iix7fSksbi5hcHBseShlLGFyZ3VtZW50cyl9fSx0LmkodS5iKShlLk9ic2VydmVyLkVWRU5UX05BTUVTLmxpbmtzLmNvbmZpZyxmdW5jdGlvbihuLHQpe2UuTGlua1RyYWNrZXI9YSh0KSxlLkxpbmtUcmFja2VyLnNob3VsZFRyYWNrTGlua3M9dC5zaG91bGRUcmFja0VtYWlsTGlua3MsZS5MaW5rVHJhY2tlci5jdXJyZW50VXNlcj10LnVzZXJ9KTtuZXcgZS5PYnNlcnZlcixuZXcgZS5FbWFpbEFsaWFzZXNGZXRjaGVyLG5ldyBlLlB1c2hTdGF0ZUNoYW5nZUVtaXRvcn0od2luZG93Lk1haWx0cmFjaz13aW5kb3cuTWFpbHRyYWNrfHx7fSl9LDQzOmZ1bmN0aW9uKGUsbix0KXt2YXIgdT10KDUxKTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSxuKXt2YXIgdD11KGUsbikvMWUzO3JldHVybiB0PjA/TWF0aC5mbG9vcih0KTpNYXRoLmNlaWwodCl9fSw0OTpmdW5jdGlvbihlLG4sdCl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIHUoKXtyZXR1cm4gcigiZWRnZSIpfWZ1bmN0aW9uIHIoZSl7cmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZSl9dC5kKG4sImEiLGZ1bmN0aW9uKCl7cmV0dXJuIHV9KX0sNTA6ZnVuY3Rpb24oZSxuLHQpe3ZhciB1PXQoMTQpO2UuZXhwb3J0cz1mdW5jdGlvbihlLG4pe3ZhciB0PXUoZSkuZ2V0VGltZSgpLHI9dShuKS5nZXRUaW1lKCk7cmV0dXJuIHQ+cj8tMTp0PHI/MTowfX0sNTE6ZnVuY3Rpb24oZSxuLHQpe3ZhciB1PXQoMTQpO2UuZXhwb3J0cz1mdW5jdGlvbihlLG4pe3ZhciB0PXUoZSkscj11KG4pO3JldHVybiB0LmdldFRpbWUoKS1yLmdldFRpbWUoKX19LDUyOmZ1bmN0aW9uKGUsbix0KXt2YXIgdT10KDUwKSxyPXQoMTQpLG89dCg0MyksYT10KDI3KSxzPTE0NDAsaT00MzIwMCxjPTUyNTYwMDtlLmV4cG9ydHM9ZnVuY3Rpb24oZSxuLHQpe3ZhciBkPXR8fHt9LEY9dShlLG4pLGY9ZC5sb2NhbGUsaD1hLmRpc3RhbmNlSW5Xb3Jkcy5sb2NhbGl6ZTtmJiZmLmRpc3RhbmNlSW5Xb3JkcyYmZi5kaXN0YW5jZUluV29yZHMubG9jYWxpemUmJihoPWYuZGlzdGFuY2VJbldvcmRzLmxvY2FsaXplKTt2YXIgbCxtLHA9e2FkZFN1ZmZpeDpCb29sZWFuKGQuYWRkU3VmZml4KSxjb21wYXJpc29uOkZ9O0Y+MD8obD1yKGUpLG09cihuKSk6KGw9cihuKSxtPXIoZSkpO3ZhciBnLHYsQSxELHgsRT1NYXRoW2QucGFydGlhbE1ldGhvZD9TdHJpbmcoZC5wYXJ0aWFsTWV0aG9kKToiZmxvb3IiXSxiPW8obSxsKSxNPW0uZ2V0VGltZXpvbmVPZmZzZXQoKS1sLmdldFRpbWV6b25lT2Zmc2V0KCkseT1FKGIvNjApLU07aWYoInMiPT09KGc9ZC51bml0P1N0cmluZyhkLnVuaXQpOnk8MT8icyI6eTw2MD8ibSI6eTxzPyJoIjp5PGk/ImQiOnk8Yz8iTSI6IlkiKSlyZXR1cm4gaCgieFNlY29uZHMiLGIscCk7aWYoIm0iPT09ZylyZXR1cm4gaCgieE1pbnV0ZXMiLHkscCk7aWYoImgiPT09ZylyZXR1cm4gdj1FKHkvNjApLGgoInhIb3VycyIsdixwKTtpZigiZCI9PT1nKXJldHVybiBBPUUoeS9zKSxoKCJ4RGF5cyIsQSxwKTtpZigiTSI9PT1nKXJldHVybiBEPUUoeS9pKSxoKCJ4TW9udGhzIixELHApO2lmKCJZIj09PWcpcmV0dXJuIHg9RSh5L2MpLGgoInhZZWFycyIseCxwKTt0aHJvdyBuZXcgRXJyb3IoIlVua25vd24gdW5pdDogIitnKX19LDUzOmZ1bmN0aW9uKGUsbil7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBlIGluc3RhbmNlb2YgRGF0ZX19LDU0OmZ1bmN0aW9uKGUsbil7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dmFyIGU9e2xlc3NUaGFuWFNlY29uZHM6e29uZToibWVueXMgZCd1biBzZWdvbiIsb3RoZXI6Im1lbnlzIGRlIHt7Y291bnR9fSBzZWdvbnMifSx4U2Vjb25kczp7b25lOiIxIHNlZ29uIixvdGhlcjoie3tjb3VudH19IHNlZ29ucyJ9LGhhbGZBTWludXRlOiJtaWcgbWludXQiLGxlc3NUaGFuWE1pbnV0ZXM6e29uZToibWVueXMgZCd1biBtaW51dCIsb3RoZXI6Im1lbnlzIGRlIHt7Y291bnR9fSBtaW51dHMifSx4TWludXRlczp7b25lOiIxIG1pbnV0IixvdGhlcjoie3tjb3VudH19IG1pbnV0cyJ9LGFib3V0WEhvdXJzOntvbmU6ImFwcm94aW1hZGFtZW50IHVuYSBob3JhIixvdGhlcjoiYXByb3hpbWFkYW1lbnQge3tjb3VudH19IGhvcmVzIn0seEhvdXJzOntvbmU6IjEgaG9yYSIsb3RoZXI6Int7Y291bnR9fSBob3JlcyJ9LHhEYXlzOntvbmU6IjEgZGlhIixvdGhlcjoie3tjb3VudH19IGRpZXMifSxhYm91dFhNb250aHM6e29uZToiYXByb3hpbWFkYW1lbnQgdW4gbWVzIixvdGhlcjoiYXByb3hpbWFkYW1lbnQge3tjb3VudH19IG1lc29zIn0seE1vbnRoczp7b25lOiIxIG1lcyIsb3RoZXI6Int7Y291bnR9fSBtZXNvcyJ9LGFib3V0WFllYXJzOntvbmU6ImFwcm94aW1hZGFtZW50IHVuIGFueSIsb3RoZXI6ImFwcm94aW1hZGFtZW50IHt7Y291bnR9fSBhbnlzIn0seFllYXJzOntvbmU6IjEgYW55IixvdGhlcjoie3tjb3VudH19IGFueXMifSxvdmVyWFllYXJzOntvbmU6Im1ceGU5cyBkJ3VuIGFueSIsb3RoZXI6Im1ceGU5cyBkZSB7e2NvdW50fX0gYW55cyJ9LGFsbW9zdFhZZWFyczp7b25lOiJnYWlyZWJceGU5IHVuIGFueSIsb3RoZXI6ImdhaXJlYlx4ZTkge3tjb3VudH19IGFueXMifX07cmV0dXJue2xvY2FsaXplOmZ1bmN0aW9uKG4sdCx1KXt1PXV8fHt9O3ZhciByO3JldHVybiByPSJzdHJpbmciPT10eXBlb2YgZVtuXT9lW25dOjE9PT10P2Vbbl0ub25lOmVbbl0ub3RoZXIucmVwbGFjZSgie3tjb3VudH19Iix0KSx1LmFkZFN1ZmZpeD91LmNvbXBhcmlzb24+MD8iZW4gIityOiJmYSAiK3I6cn19fX0sNTU6ZnVuY3Rpb24oZSxuLHQpe2Z1bmN0aW9uIHUoZSl7c3dpdGNoKGUpe2Nhc2UgMTpyZXR1cm4iMXIiO2Nhc2UgMjpyZXR1cm4iMm4iO2Nhc2UgMzpyZXR1cm4iM3IiO2Nhc2UgNDpyZXR1cm4iNHQiO2RlZmF1bHQ6cmV0dXJuIGUrIlx4ZTgifX12YXIgcj10KDgpO2UuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciBlPVsiZ2VuIiwiZmViIiwibWFyIiwiYWJyIiwibWFpIiwianVuIiwianVsIiwiYWdvIiwic2V0Iiwib2N0Iiwibm92IiwiZGVzIl0sbj1bImdlbmVyIiwiZmVicmVyIiwibWFyXHhlNyIsImFicmlsIiwibWFpZyIsImp1bnkiLCJqdWxpb2wiLCJhZ29zdCIsInNldGVtYnJlIiwib2N0b2JyZSIsIm5vdmVtYnJlIiwiZGVzZW1icmUiXSx0PVsiZGciLCJkbCIsImR0IiwiZGMiLCJkaiIsImR2IiwiZHMiXSxvPVsiZGdlIiwiZGxzIiwiZHRzIiwiZGNzIiwiZGpzIiwiZHZzIiwiZHNzIl0sYT1bImRpdW1lbmdlIiwiZGlsbHVucyIsImRpbWFydHMiLCJkaW1lY3JlcyIsImRpam91cyIsImRpdmVuZHJlcyIsImRpc3NhYnRlIl0scz1bIkFNIiwiUE0iXSxpPVsiYW0iLCJwbSJdLGM9WyJhLm0uIiwicC5tLiJdLGQ9e01NTTpmdW5jdGlvbihuKXtyZXR1cm4gZVtuLmdldE1vbnRoKCldfSxNTU1NOmZ1bmN0aW9uKGUpe3JldHVybiBuW2UuZ2V0TW9udGgoKV19LGRkOmZ1bmN0aW9uKGUpe3JldHVybiB0W2UuZ2V0RGF5KCldfSxkZGQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG9bZS5nZXREYXkoKV19LGRkZGQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGFbZS5nZXREYXkoKV19LEE6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0SG91cnMoKS8xMj49MT9zWzFdOnNbMF19LGE6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0SG91cnMoKS8xMj49MT9pWzFdOmlbMF19LGFhOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEhvdXJzKCkvMTI+PTE/Y1sxXTpjWzBdfX07cmV0dXJuWyJNIiwiRCIsIkRERCIsImQiLCJRIiwiVyJdLmZvckVhY2goZnVuY3Rpb24oZSl7ZFtlKyJvIl09ZnVuY3Rpb24obix0KXtyZXR1cm4gdSh0W2VdKG4pKX19KSx7Zm9ybWF0dGVyczpkLGZvcm1hdHRpbmdUb2tlbnNSZWdFeHA6cihkKX19fSw1NjpmdW5jdGlvbihlLG4sdCl7dmFyIHU9dCg1NCkscj10KDU1KTtlLmV4cG9ydHM9e2Rpc3RhbmNlSW5Xb3Jkczp1KCksZm9ybWF0OnIoKX19LDU3OmZ1bmN0aW9uKGUsbil7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dmFyIGU9e2xlc3NUaGFuWFNlY29uZHM6e29uZToibGVzcyB0aGFuIGEgc2Vjb25kIixvdGhlcjoibGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzIn0seFNlY29uZHM6e29uZToiMSBzZWNvbmQiLG90aGVyOiJ7e2NvdW50fX0gc2Vjb25kcyJ9LGhhbGZBTWludXRlOiJoYWxmIGEgbWludXRlIixsZXNzVGhhblhNaW51dGVzOntvbmU6Imxlc3MgdGhhbiBhIG1pbnV0ZSIsb3RoZXI6Imxlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcyJ9LHhNaW51dGVzOntvbmU6IjEgbWludXRlIixvdGhlcjoie3tjb3VudH19IG1pbnV0ZXMifSxhYm91dFhIb3Vyczp7b25lOiJhYm91dCAxIGhvdXIiLG90aGVyOiJhYm91dCB7e2NvdW50fX0gaG91cnMifSx4SG91cnM6e29uZToiMSBob3VyIixvdGhlcjoie3tjb3VudH19IGhvdXJzIn0seERheXM6e29uZToiMSBkYXkiLG90aGVyOiJ7e2NvdW50fX0gZGF5cyJ9LGFib3V0WE1vbnRoczp7b25lOiJhYm91dCAxIG1vbnRoIixvdGhlcjoiYWJvdXQge3tjb3VudH19IG1vbnRocyJ9LHhNb250aHM6e29uZToiMSBtb250aCIsb3RoZXI6Int7Y291bnR9fSBtb250aHMifSxhYm91dFhZZWFyczp7b25lOiJhYm91dCAxIHllYXIiLG90aGVyOiJhYm91dCB7e2NvdW50fX0geWVhcnMifSx4WWVhcnM6e29uZToiMSB5ZWFyIixvdGhlcjoie3tjb3VudH19IHllYXJzIn0sb3ZlclhZZWFyczp7b25lOiJvdmVyIDEgeWVhciIsb3RoZXI6Im92ZXIge3tjb3VudH19IHllYXJzIn0sYWxtb3N0WFllYXJzOntvbmU6ImFsbW9zdCAxIHllYXIiLG90aGVyOiJhbG1vc3Qge3tjb3VudH19IHllYXJzIn19O3JldHVybntsb2NhbGl6ZTpmdW5jdGlvbihuLHQsdSl7dT11fHx7fTt2YXIgcjtyZXR1cm4gcj0ic3RyaW5nIj09dHlwZW9mIGVbbl0/ZVtuXToxPT09dD9lW25dLm9uZTplW25dLm90aGVyLnJlcGxhY2UoInt7Y291bnR9fSIsdCksdS5hZGRTdWZmaXg/dS5jb21wYXJpc29uPjA/ImluICIrcjpyKyIgYWdvIjpyfX19fSw1ODpmdW5jdGlvbihlLG4sdCl7ZnVuY3Rpb24gdShlKXt2YXIgbj1lJTEwMDtpZihuPjIwfHxuPDEwKXN3aXRjaChuJTEwKXtjYXNlIDE6cmV0dXJuIGUrInN0IjtjYXNlIDI6cmV0dXJuIGUrIm5kIjtjYXNlIDM6cmV0dXJuIGUrInJkIn1yZXR1cm4gZSsidGgifXZhciByPXQoOCk7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dmFyIGU9WyJKYW4iLCJGZWIiLCJNYXIiLCJBcHIiLCJNYXkiLCJKdW4iLCJKdWwiLCJBdWciLCJTZXAiLCJPY3QiLCJOb3YiLCJEZWMiXSxuPVsiSmFudWFyeSIsIkZlYnJ1YXJ5IiwiTWFyY2giLCJBcHJpbCIsIk1heSIsIkp1bmUiLCJKdWx5IiwiQXVndXN0IiwiU2VwdGVtYmVyIiwiT2N0b2JlciIsIk5vdmVtYmVyIiwiRGVjZW1iZXIiXSx0PVsiU3UiLCJNbyIsIlR1IiwiV2UiLCJUaCIsIkZyIiwiU2EiXSxvPVsiU3VuIiwiTW9uIiwiVHVlIiwiV2VkIiwiVGh1IiwiRnJpIiwiU2F0Il0sYT1bIlN1bmRheSIsIk1vbmRheSIsIlR1ZXNkYXkiLCJXZWRuZXNkYXkiLCJUaHVyc2RheSIsIkZyaWRheSIsIlNhdHVyZGF5Il0scz1bIkFNIiwiUE0iXSxpPVsiYW0iLCJwbSJdLGM9WyJhLm0uIiwicC5tLiJdLGQ9e01NTTpmdW5jdGlvbihuKXtyZXR1cm4gZVtuLmdldE1vbnRoKCldfSxNTU1NOmZ1bmN0aW9uKGUpe3JldHVybiBuW2UuZ2V0TW9udGgoKV19LGRkOmZ1bmN0aW9uKGUpe3JldHVybiB0W2UuZ2V0RGF5KCldfSxkZGQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG9bZS5nZXREYXkoKV19LGRkZGQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGFbZS5nZXREYXkoKV19LEE6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0SG91cnMoKS8xMj49MT9zWzFdOnNbMF19LGE6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0SG91cnMoKS8xMj49MT9pWzFdOmlbMF19LGFhOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEhvdXJzKCkvMTI+PTE/Y1sxXTpjWzBdfX07cmV0dXJuWyJNIiwiRCIsIkRERCIsImQiLCJRIiwiVyJdLmZvckVhY2goZnVuY3Rpb24oZSl7ZFtlKyJvIl09ZnVuY3Rpb24obix0KXtyZXR1cm4gdSh0W2VdKG4pKX19KSx7Zm9ybWF0dGVyczpkLGZvcm1hdHRpbmdUb2tlbnNSZWdFeHA6cihkKX19fSw1OTpmdW5jdGlvbihlLG4pe2UuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciBlPXtsZXNzVGhhblhTZWNvbmRzOntvbmU6Im1lbm9zIGRlIHVuIHNlZ3VuZG8iLG90aGVyOiJtZW5vcyBkZSB7e2NvdW50fX0gc2VndW5kb3MifSx4U2Vjb25kczp7b25lOiIxIHNlZ3VuZG8iLG90aGVyOiJ7e2NvdW50fX0gc2VndW5kb3MifSxoYWxmQU1pbnV0ZToibWVkaW8gbWludXRvIixsZXNzVGhhblhNaW51dGVzOntvbmU6Im1lbm9zIGRlIHVuIG1pbnV0byIsb3RoZXI6Im1lbm9zIGRlIHt7Y291bnR9fSBtaW51dG9zIn0seE1pbnV0ZXM6e29uZToiMSBtaW51dG8iLG90aGVyOiJ7e2NvdW50fX0gbWludXRvcyJ9LGFib3V0WEhvdXJzOntvbmU6ImFscmVkZWRvciBkZSAxIGhvcmEiLG90aGVyOiJhbHJlZGVkb3IgZGUge3tjb3VudH19IGhvcmFzIn0seEhvdXJzOntvbmU6IjEgaG9yYSIsb3RoZXI6Int7Y291bnR9fSBob3JhcyJ9LHhEYXlzOntvbmU6IjEgZFx4ZWRhIixvdGhlcjoie3tjb3VudH19IGRceGVkYXMifSxhYm91dFhNb250aHM6e29uZToiYWxyZWRlZG9yIGRlIDEgbWVzIixvdGhlcjoiYWxyZWRlZG9yIGRlIHt7Y291bnR9fSBtZXNlcyJ9LHhNb250aHM6e29uZToiMSBtZXMiLG90aGVyOiJ7e2NvdW50fX0gbWVzZXMifSxhYm91dFhZZWFyczp7b25lOiJhbHJlZGVkb3IgZGUgMSBhXHhmMW8iLG90aGVyOiJhbHJlZGVkb3IgZGUge3tjb3VudH19IGFceGYxb3MifSx4WWVhcnM6e29uZToiMSBhXHhmMW8iLG90aGVyOiJ7e2NvdW50fX0gYVx4ZjFvcyJ9LG92ZXJYWWVhcnM6e29uZToibVx4ZTFzIGRlIDEgYVx4ZjFvIixvdGhlcjoibVx4ZTFzIGRlIHt7Y291bnR9fSBhXHhmMW9zIn0sYWxtb3N0WFllYXJzOntvbmU6ImNhc2kgMSBhXHhmMW8iLG90aGVyOiJjYXNpIHt7Y291bnR9fSBhXHhmMW9zIn19O3JldHVybntsb2NhbGl6ZTpmdW5jdGlvbihuLHQsdSl7dT11fHx7fTt2YXIgcjtyZXR1cm4gcj0ic3RyaW5nIj09dHlwZW9mIGVbbl0/ZVtuXToxPT09dD9lW25dLm9uZTplW25dLm90aGVyLnJlcGxhY2UoInt7Y291bnR9fSIsdCksdS5hZGRTdWZmaXg/dS5jb21wYXJpc29uPjA/ImVuICIrcjoiaGFjZSAiK3I6cn19fX0sNjpmdW5jdGlvbihlLG4sdCl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIHUoZSxuPXt9KXtyKGMoKSxlLG4pfWZ1bmN0aW9uIHIoZSxuLHU9e30pe3QuaShkLmEpKCk/KCgpPT57bGV0IHQ9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoIkN1c3RvbUV2ZW50Iik7dC5pbml0Q3VzdG9tRXZlbnQobiwhMCwhMSxKU09OLnN0cmluZ2lmeSh1KSksZS5kaXNwYXRjaEV2ZW50KHQpfSkoKTplLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG4se2RldGFpbDpKU09OLnN0cmluZ2lmeSh1KX0pKX1mdW5jdGlvbiBvKGUsbix0PSExKXtyZXR1cm4gYShjKCksZSxuLHQpfWZ1bmN0aW9uIGEoZSxuLHQsdT0hMSl7Y29uc3Qgcj1lPT57bGV0IHU9e307dHJ5e3U9SlNPTi5wYXJzZShlLmRldGFpbCxGLmQpfWNhdGNoKGUpe2NvbnNvbGUud2FybihgRmFpbGVkIHRvIHBhcnNlIGpzb24gZm9yIGV2ZW50ICR7bn1gLGUuZGV0YWlsKX10KGUsdSxyKX07cmV0dXJuIGUuYWRkRXZlbnRMaXN0ZW5lcihuLHIsdSkscn1mdW5jdGlvbiBzKGUsbil7aShjKCksZSxuKX1mdW5jdGlvbiBpKGUsbix0KXtlLnJlbW92ZUV2ZW50TGlzdGVuZXIobix0KX1mdW5jdGlvbiBjKCl7cmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudH12YXIgZD10KDQ5KSxGPXQoNyk7dC5kKG4sImEiLGZ1bmN0aW9uKCl7cmV0dXJuIHV9KSx0LmQobiwiZSIsZnVuY3Rpb24oKXtyZXR1cm4gcn0pLHQuZChuLCJiIixmdW5jdGlvbigpe3JldHVybiBvfSksdC5kKG4sImQiLGZ1bmN0aW9uKCl7cmV0dXJuIGF9KSx0LmQobiwiYyIsZnVuY3Rpb24oKXtyZXR1cm4gc30pfSw2MDpmdW5jdGlvbihlLG4sdCl7ZnVuY3Rpb24gdShlKXtyZXR1cm4gZSsiXHhiYSJ9dmFyIHI9dCg4KTtlLmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgZT1bImVuZSIsImZlYiIsIm1hciIsImFiciIsIm1heSIsImp1biIsImp1bCIsImFnbyIsInNlcCIsIm9jdCIsIm5vdiIsImRpYyJdLG49WyJlbmVybyIsImZlYnJlcm8iLCJtYXJ6byIsImFicmlsIiwibWF5byIsImp1bmlvIiwianVsaW8iLCJhZ29zdG8iLCJzZXB0aWVtYnJlIiwib2N0dWJyZSIsIm5vdmllbWJyZSIsImRpY2llbWJyZSJdLHQ9WyJkbyIsImx1IiwibWEiLCJtaSIsImp1IiwidmkiLCJzYSJdLG89WyJkb20iLCJsdW4iLCJtYXIiLCJtaVx4ZTkiLCJqdWUiLCJ2aWUiLCJzXHhlMWIiXSxhPVsiZG9taW5nbyIsImx1bmVzIiwibWFydGVzIiwibWlceGU5cmNvbGVzIiwianVldmVzIiwidmllcm5lcyIsInNceGUxYmFkbyJdLHM9WyJBTSIsIlBNIl0saT1bImFtIiwicG0iXSxjPVsiYS5tLiIsInAubS4iXSxkPXtNTU06ZnVuY3Rpb24obil7cmV0dXJuIGVbbi5nZXRNb250aCgpXX0sTU1NTTpmdW5jdGlvbihlKXtyZXR1cm4gbltlLmdldE1vbnRoKCldfSxkZDpmdW5jdGlvbihlKXtyZXR1cm4gdFtlLmdldERheSgpXX0sZGRkOmZ1bmN0aW9uKGUpe3JldHVybiBvW2UuZ2V0RGF5KCldfSxkZGRkOmZ1bmN0aW9uKGUpe3JldHVybiBhW2UuZ2V0RGF5KCldfSxBOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEhvdXJzKCkvMTI+PTE/c1sxXTpzWzBdfSxhOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEhvdXJzKCkvMTI+PTE/aVsxXTppWzBdfSxhYTpmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRIb3VycygpLzEyPj0xP2NbMV06Y1swXX19O3JldHVyblsiTSIsIkQiLCJEREQiLCJkIiwiUSIsIlciXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2RbZSsibyJdPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIHUodFtlXShuKSl9fSkse2Zvcm1hdHRlcnM6ZCxmb3JtYXR0aW5nVG9rZW5zUmVnRXhwOnIoZCl9fX0sNjE6ZnVuY3Rpb24oZSxuLHQpe3ZhciB1PXQoNTkpLHI9dCg2MCk7ZS5leHBvcnRzPXtkaXN0YW5jZUluV29yZHM6dSgpLGZvcm1hdDpyKCl9fSw2MjpmdW5jdGlvbihlLG4pe2UuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciBlPXtsZXNzVGhhblhTZWNvbmRzOntvbmU6Im1lbm9zIGRlIHVtIHNlZ3VuZG8iLG90aGVyOiJtZW5vcyBkZSB7e2NvdW50fX0gc2VndW5kb3MifSx4U2Vjb25kczp7b25lOiIxIHNlZ3VuZG8iLG90aGVyOiJ7e2NvdW50fX0gc2VndW5kb3MifSxoYWxmQU1pbnV0ZToibWVpbyBtaW51dG8iLGxlc3NUaGFuWE1pbnV0ZXM6e29uZToibWVub3MgZGUgdW0gbWludXRvIixvdGhlcjoibWVub3MgZGUge3tjb3VudH19IG1pbnV0b3MifSx4TWludXRlczp7b25lOiIxIG1pbnV0byIsb3RoZXI6Int7Y291bnR9fSBtaW51dG9zIn0sYWJvdXRYSG91cnM6e29uZToiYXByb3hpbWFkYW1lbnRlIDEgaG9yYSIsb3RoZXI6ImFwcm94aW1hZGFtZW50ZSB7e2NvdW50fX0gaG9yYXMifSx4SG91cnM6e29uZToiMSBob3JhIixvdGhlcjoie3tjb3VudH19IGhvcmFzIn0seERheXM6e29uZToiMSBkaWEiLG90aGVyOiJ7e2NvdW50fX0gZGlhcyJ9LGFib3V0WE1vbnRoczp7b25lOiJhcHJveGltYWRhbWVudGUgMSBtXHhlYXMiLG90aGVyOiJhcHJveGltYWRhbWVudGUge3tjb3VudH19IG1lc2VzIn0seE1vbnRoczp7b25lOiIxIG1ceGVhcyIsb3RoZXI6Int7Y291bnR9fSBtZXNlcyJ9LGFib3V0WFllYXJzOntvbmU6ImFwcm94aW1hZGFtZW50ZSAxIGFubyIsb3RoZXI6ImFwcm94aW1hZGFtZW50ZSB7e2NvdW50fX0gYW5vcyJ9LHhZZWFyczp7b25lOiIxIGFubyIsb3RoZXI6Int7Y291bnR9fSBhbm9zIn0sb3ZlclhZZWFyczp7b25lOiJtYWlzIGRlIDEgYW5vIixvdGhlcjoibWFpcyBkZSB7e2NvdW50fX0gYW5vcyJ9LGFsbW9zdFhZZWFyczp7b25lOiJxdWFzZSAxIGFubyIsb3RoZXI6InF1YXNlIHt7Y291bnR9fSBhbm9zIn19O3JldHVybntsb2NhbGl6ZTpmdW5jdGlvbihuLHQsdSl7dT11fHx7fTt2YXIgcjtyZXR1cm4gcj0ic3RyaW5nIj09dHlwZW9mIGVbbl0/ZVtuXToxPT09dD9lW25dLm9uZTplW25dLm90aGVyLnJlcGxhY2UoInt7Y291bnR9fSIsdCksdS5hZGRTdWZmaXg/dS5jb21wYXJpc29uPjA/ImRhcXVpIGEgIityOiJoXHhlMSAiK3I6cn19fX0sNjM6ZnVuY3Rpb24oZSxuLHQpe2Z1bmN0aW9uIHUoZSl7cmV0dXJuIGUrIlx4YmEifXZhciByPXQoOCk7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dmFyIGU9WyJqYW4iLCJmZXYiLCJtYXIiLCJhYnIiLCJtYWkiLCJqdW4iLCJqdWwiLCJhZ28iLCJzZXQiLCJvdXQiLCJub3YiLCJkZXoiXSxuPVsiamFuZWlybyIsImZldmVyZWlybyIsIm1hclx4ZTdvIiwiYWJyaWwiLCJtYWlvIiwianVuaG8iLCJqdWxobyIsImFnb3N0byIsInNldGVtYnJvIiwib3V0dWJybyIsIm5vdmVtYnJvIiwiZGV6ZW1icm8iXSx0PVsiZG8iLCJzZSIsInRlIiwicWEiLCJxaSIsInNlIiwic2EiXSxvPVsiZG9tIiwic2VnIiwidGVyIiwicXVhIiwicXVpIiwic2V4Iiwic1x4ZTFiIl0sYT1bImRvbWluZ28iLCJzZWd1bmRhLWZlaXJhIiwidGVyXHhlN2EtZmVpcmEiLCJxdWFydGEtZmVpcmEiLCJxdWludGEtZmVpcmEiLCJzZXh0YS1mZWlyYSIsInNceGUxYmFkbyJdLHM9WyJBTSIsIlBNIl0saT1bImFtIiwicG0iXSxjPVsiYS5tLiIsInAubS4iXSxkPXtNTU06ZnVuY3Rpb24obil7cmV0dXJuIGVbbi5nZXRNb250aCgpXX0sTU1NTTpmdW5jdGlvbihlKXtyZXR1cm4gbltlLmdldE1vbnRoKCldfSxkZDpmdW5jdGlvbihlKXtyZXR1cm4gdFtlLmdldERheSgpXX0sZGRkOmZ1bmN0aW9uKGUpe3JldHVybiBvW2UuZ2V0RGF5KCldfSxkZGRkOmZ1bmN0aW9uKGUpe3JldHVybiBhW2UuZ2V0RGF5KCldfSxBOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEhvdXJzKCkvMTI+PTE/c1sxXTpzWzBdfSxhOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEhvdXJzKCkvMTI+PTE/aVsxXTppWzBdfSxhYTpmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRIb3VycygpLzEyPj0xP2NbMV06Y1swXX19O3JldHVyblsiTSIsIkQiLCJEREQiLCJkIiwiUSIsIlciXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2RbZSsibyJdPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIHUodFtlXShuKSl9fSkse2Zvcm1hdHRlcnM6ZCxmb3JtYXR0aW5nVG9rZW5zUmVnRXhwOnIoZCl9fX0sNjQ6ZnVuY3Rpb24oZSxuLHQpe3ZhciB1PXQoNjIpLHI9dCg2Myk7ZS5leHBvcnRzPXtkaXN0YW5jZUluV29yZHM6dSgpLGZvcm1hdDpyKCl9fSw3OmZ1bmN0aW9uKGUsbix0KXsidXNlIHN0cmljdCI7dmFyIHU9dCg1Mikscj10Lm4odSk7Y29uc3Qgbz17IiYiOiImYW1wOyIsIjwiOiImbHQ7IiwiPiI6IiZndDsiLCciJzoiJnF1b3Q7IiwiJyI6IiZhcG9zOyJ9O24uZj0oZT0+ZSYmZS5zcGxpdCgiIikubWFwKGU9Pm9bZV18fGUpLmpvaW4oIiIpKTtuLmU9KCguLi5lKT0+KC4uLm4pPT5lLnNsaWNlKDAsLTEpLnJlZHVjZVJpZ2h0KChlLG4pPT5uKGUpLGVbZS5sZW5ndGgtMV0uYXBwbHkobnVsbCxuKSkpO24uZz0oKC4uLmUpPT5lLnJlZHVjZVJpZ2h0KChlLG4pPT5uLmNvbmNhdChlKSkpO2xldCBhPXtlbjp0KDI3KSxlczp0KDYxKSxwdDp0KDY0KSxjYTp0KDU2KX07bi5pPSgoZSxuLHQ9ImVuIik9PnIoKSgxZTMqZSwxZTMqbix7bG9jYWxlOmFbdF19KSk7bi5qPShlPT4ib2JqZWN0Ij09dHlwZW9mIGUmJjE9PT1PYmplY3Qua2V5cyhlKS5sZW5ndGgpO24uaD0oZT0+ZS5yZXBsYWNlKC88L2csIiZsdDsiKS5yZXBsYWNlKC8+L2csIiZndDsiKSk7bi5sPSgoZSxuKT0+KFsuLi5BcnJheShuKV0uZm9yRWFjaCgoKT0+ZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJiciIpKSksITApKTtuLms9KGU9Pntjb25zdCBuPWUuY2xvc2VzdCgiW2RhdGEtbXQtY29tcG9zZXJdIikucXVlcnlTZWxlY3RvcignW25hbWU9ImRyYWZ0Il0nKTtyZXR1cm4gbj9bIiIsInVuZGVmaW5lZCJdLmluY2x1ZGVzKG4udmFsdWUpOjE9PT1lLmNoaWxkRWxlbWVudENvdW50JiYiQlIiPT09ZS5maXJzdEVsZW1lbnRDaGlsZC50YWdOYW1lfSk7Y29uc3Qgcz0vXihcZHs0fSktKFxkezJ9KS0oXGR7Mn0pVChcZHsyfSk6KFxkezJ9KTooXGR7Mn0oPzpcLlxkKikpKD86WnwoXCt8LSkoW1xkfDpdKikpPyQvLGk9L15cL0RhdGVcKChkfC18LiopXClbXC98XFxdJC87bi5kPSgoZSxuKT0+e2lmKCJzdHJpbmciPT10eXBlb2Ygbil7dmFyIHQ9cy5leGVjKG4pO2lmKHQpcmV0dXJuIG5ldyBEYXRlKG4pO2lmKHQ9aS5leGVjKG4pKXt2YXIgdT10WzFdLnNwbGl0KC9bLSssLl0vKTtyZXR1cm4gbmV3IERhdGUodVswXT8rdVswXTowLSt1WzFdKX19cmV0dXJuIG59KTtuLm09KGU9Pnt2YXIgbj1lLmZpcnN0Q2hpbGQsdD1kb2N1bWVudC5jcmVhdGVSYW5nZSgpO3Quc2V0U3RhcnQobiwwKSx0LnNldEVuZChuLDApO3ZhciB1PXdpbmRvdy5nZXRTZWxlY3Rpb24oKTt1LnJlbW92ZUFsbFJhbmdlcygpLHUuYWRkUmFuZ2UodCl9KTtuLmE9KGU9Pntjb25zdCBuPWUudG9Mb3dlckNhc2UoKS5zcGxpdCgiQCIpO3JldHVybiBuWzBdLnNwbGl0KCIrIilbMF0ucmVwbGFjZSgvXC4vZywiIikrIkAiK25bMV19KTtjb25zdCBjPS9cYigoPyFcLikoKD8hLipcLnsyfSlbYS16QS1aMC05XHUwMDgwLVx1MDBGRlx1MDEwMC1cdTAxN0ZcdTAxODAtXHUwMjRGXHUwMjUwLVx1MDJBRlx1MDMwMC1cdTAzNkZcdTAzNzAtXHUwM0ZGXHUwNDAwLVx1MDRGRlx1MDUwMC1cdTA1MkZcdTA1MzAtXHUwNThGXHUwNTkwLVx1MDVGRlx1MDYwMC1cdTA2RkZcdTA3MDAtXHUwNzRGXHUwNzUwLVx1MDc3Rlx1MDc4MC1cdTA3QkZcdTA3QzAtXHUwN0ZGXHUwOTAwLVx1MDk3Rlx1MDk4MC1cdTA5RkZcdTBBMDAtXHUwQTdGXHUwQTgwLVx1MEFGRlx1MEIwMC1cdTBCN0ZcdTBCODAtXHUwQkZGXHUwQzAwLVx1MEM3Rlx1MEM4MC1cdTBDRkZcdTBEMDAtXHUwRDdGXHUwRDgwLVx1MERGRlx1MEUwMC1cdTBFN0ZcdTBFODAtXHUwRUZGXHUwRjAwLVx1MEZGRlx1MTAwMC1cdTEwOUZcdTEwQTAtXHUxMEZGXHUxMTAwLVx1MTFGRlx1MTIwMC1cdTEzN0ZcdTEzODAtXHUxMzlGXHUxM0EwLVx1MTNGRlx1MTQwMC1cdTE2N0ZcdTE2ODAtXHUxNjlGXHUxNkEwLVx1MTZGRlx1MTcwMC1cdTE3MUZcdTE3MjAtXHUxNzNGXHUxNzQwLVx1MTc1Rlx1MTc2MC1cdTE3N0ZcdTE3ODAtXHUxN0ZGXHUxODAwLVx1MThBRlx1MTkwMC1cdTE5NEZcdTE5NTAtXHUxOTdGXHUxOTgwLVx1MTlERlx1MTlFMC1cdTE5RkZcdTFBMDAtXHUxQTFGXHUxQjAwLVx1MUI3Rlx1MUQwMC1cdTFEN0ZcdTFEODAtXHUxREJGXHUxREMwLVx1MURGRlx1MUUwMC1cdTFFRkZcdTFGMDAtXHUxRkZGXHUyMEQwLVx1MjBGRlx1MjEwMC1cdTIxNEZcdTJDMDAtXHUyQzVGXHUyQzYwLVx1MkM3Rlx1MkM4MC1cdTJDRkZcdTJEMDAtXHUyRDJGXHUyRDMwLVx1MkQ3Rlx1MkQ4MC1cdTJEREZcdTJGMDAtXHUyRkRGXHUyRkYwLVx1MkZGRlx1MzA0MC1cdTMwOUZcdTMwQTAtXHUzMEZGXHUzMTAwLVx1MzEyRlx1MzEzMC1cdTMxOEZcdTMxOTAtXHUzMTlGXHUzMUMwLVx1MzFFRlx1MzFGMC1cdTMxRkZcdTMyMDAtXHUzMkZGXHUzMzAwLVx1MzNGRlx1MzQwMC1cdTREQkZcdTREQzAtXHU0REZGXHU0RTAwLVx1OUZGRlx1QTAwMC1cdUE0OEZcdUE0OTAtXHVBNENGXHVBNzAwLVx1QTcxRlx1QTgwMC1cdUE4MkZcdUE4NDAtXHVBODdGXHVBQzAwLVx1RDdBRlx1RjkwMC1cdUZBRkZcLiEjJCUmJyorLS89P15fYHt8fX5cLVxkXSspQCg/IVwuKShbYS16QS1aMC05XHUwMDgwLVx1MDBGRlx1MDEwMC1cdTAxN0ZcdTAxODAtXHUwMjRGXHUwMjUwLVx1MDJBRlx1MDMwMC1cdTAzNkZcdTAzNzAtXHUwM0ZGXHUwNDAwLVx1MDRGRlx1MDUwMC1cdTA1MkZcdTA1MzAtXHUwNThGXHUwNTkwLVx1MDVGRlx1MDYwMC1cdTA2RkZcdTA3MDAtXHUwNzRGXHUwNzUwLVx1MDc3Rlx1MDc4MC1cdTA3QkZcdTA3QzAtXHUwN0ZGXHUwOTAwLVx1MDk3Rlx1MDk4MC1cdTA5RkZcdTBBMDAtXHUwQTdGXHUwQTgwLVx1MEFGRlx1MEIwMC1cdTBCN0ZcdTBCODAtXHUwQkZGXHUwQzAwLVx1MEM3Rlx1MEM4MC1cdTBDRkZcdTBEMDAtXHUwRDdGXHUwRDgwLVx1MERGRlx1MEUwMC1cdTBFN0ZcdTBFODAtXHUwRUZGXHUwRjAwLVx1MEZGRlx1MTAwMC1cdTEwOUZcdTEwQTAtXHUxMEZGXHUxMTAwLVx1MTFGRlx1MTIwMC1cdTEzN0ZcdTEzODAtXHUxMzlGXHUxM0EwLVx1MTNGRlx1MTQwMC1cdTE2N0ZcdTE2ODAtXHUxNjlGXHUxNkEwLVx1MTZGRlx1MTcwMC1cdTE3MUZcdTE3MjAtXHUxNzNGXHUxNzQwLVx1MTc1Rlx1MTc2MC1cdTE3N0ZcdTE3ODAtXHUxN0ZGXHUxODAwLVx1MThBRlx1MTkwMC1cdTE5NEZcdTE5NTAtXHUxOTdGXHUxOTgwLVx1MTlERlx1MTlFMC1cdTE5RkZcdTFBMDAtXHUxQTFGXHUxQjAwLVx1MUI3Rlx1MUQwMC1cdTFEN0ZcdTFEODAtXHUxREJGXHUxREMwLVx1MURGRlx1MUUwMC1cdTFFRkZcdTFGMDAtXHUxRkZGXHUyMEQwLVx1MjBGRlx1MjEwMC1cdTIxNEZcdTJDMDAtXHUyQzVGXHUyQzYwLVx1MkM3Rlx1MkM4MC1cdTJDRkZcdTJEMDAtXHUyRDJGXHUyRDMwLVx1MkQ3Rlx1MkQ4MC1cdTJEREZcdTJGMDAtXHUyRkRGXHUyRkYwLVx1MkZGRlx1MzA0MC1cdTMwOUZcdTMwQTAtXHUzMEZGXHUzMTAwLVx1MzEyRlx1MzEzMC1cdTMxOEZcdTMxOTAtXHUzMTlGXHUzMUMwLVx1MzFFRlx1MzFGMC1cdTMxRkZcdTMyMDAtXHUzMkZGXHUzMzAwLVx1MzNGRlx1MzQwMC1cdTREQkZcdTREQzAtXHU0REZGXHU0RTAwLVx1OUZGRlx1QTAwMC1cdUE0OEZcdUE0OTAtXHVBNENGXHVBNzAwLVx1QTcxRlx1QTgwMC1cdUE4MkZcdUE4NDAtXHVBODdGXHVBQzAwLVx1RDdBRlx1RjkwMC1cdUZBRkZcLVwuXGRdKykoKFwuKFthLXpBLVpcdTAwODAtXHUwMEZGXHUwMTAwLVx1MDE3Rlx1MDE4MC1cdTAyNEZcdTAyNTAtXHUwMkFGXHUwMzAwLVx1MDM2Rlx1MDM3MC1cdTAzRkZcdTA0MDAtXHUwNEZGXHUwNTAwLVx1MDUyRlx1MDUzMC1cdTA1OEZcdTA1OTAtXHUwNUZGXHUwNjAwLVx1MDZGRlx1MDcwMC1cdTA3NEZcdTA3NTAtXHUwNzdGXHUwNzgwLVx1MDdCRlx1MDdDMC1cdTA3RkZcdTA5MDAtXHUwOTdGXHUwOTgwLVx1MDlGRlx1MEEwMC1cdTBBN0ZcdTBBODAtXHUwQUZGXHUwQjAwLVx1MEI3Rlx1MEI4MC1cdTBCRkZcdTBDMDAtXHUwQzdGXHUwQzgwLVx1MENGRlx1MEQwMC1cdTBEN0ZcdTBEODAtXHUwREZGXHUwRTAwLVx1MEU3Rlx1MEU4MC1cdTBFRkZcdTBGMDAtXHUwRkZGXHUxMDAwLVx1MTA5Rlx1MTBBMC1cdTEwRkZcdTExMDAtXHUxMUZGXHUxMjAwLVx1MTM3Rlx1MTM4MC1cdTEzOUZcdTEzQTAtXHUxM0ZGXHUxNDAwLVx1MTY3Rlx1MTY4MC1cdTE2OUZcdTE2QTAtXHUxNkZGXHUxNzAwLVx1MTcxRlx1MTcyMC1cdTE3M0ZcdTE3NDAtXHUxNzVGXHUxNzYwLVx1MTc3Rlx1MTc4MC1cdTE3RkZcdTE4MDAtXHUxOEFGXHUxOTAwLVx1MTk0Rlx1MTk1MC1cdTE5N0ZcdTE5ODAtXHUxOURGXHUxOUUwLVx1MTlGRlx1MUEwMC1cdTFBMUZcdTFCMDAtXHUxQjdGXHUxRDAwLVx1MUQ3Rlx1MUQ4MC1cdTFEQkZcdTFEQzAtXHUxREZGXHUxRTAwLVx1MUVGRlx1MUYwMC1cdTFGRkZcdTIwRDAtXHUyMEZGXHUyMTAwLVx1MjE0Rlx1MkMwMC1cdTJDNUZcdTJDNjAtXHUyQzdGXHUyQzgwLVx1MkNGRlx1MkQwMC1cdTJEMkZcdTJEMzAtXHUyRDdGXHUyRDgwLVx1MkRERlx1MkYwMC1cdTJGREZcdTJGRjAtXHUyRkZGXHUzMDQwLVx1MzA5Rlx1MzBBMC1cdTMwRkZcdTMxMDAtXHUzMTJGXHUzMTMwLVx1MzE4Rlx1MzE5MC1cdTMxOUZcdTMxQzAtXHUzMUVGXHUzMUYwLVx1MzFGRlx1MzIwMC1cdTMyRkZcdTMzMDAtXHUzM0ZGXHUzNDAwLVx1NERCRlx1NERDMC1cdTRERkZcdTRFMDAtXHU5RkZGXHVBMDAwLVx1QTQ4Rlx1QTQ5MC1cdUE0Q0ZcdUE3MDAtXHVBNzFGXHVBODAwLVx1QTgyRlx1QTg0MC1cdUE4N0ZcdUFDMDAtXHVEN0FGXHVGOTAwLVx1RkFGRl0pezIsfSkrKSlcYi9naTtuLmM9YztuLmI9KCgpPT53aW5kb3cuY2hyb21lJiZ3aW5kb3cuY2hyb21lLmV4dGVuc2lvbiYmd2luZG93LmNocm9tZS5leHRlbnNpb24uZ2V0QmFja2dyb3VuZFBhZ2UmJndpbmRvdz09PWNocm9tZS5leHRlbnNpb24uZ2V0QmFja2dyb3VuZFBhZ2UoKSk7bi5uPShlPT57aWYoIWUpcmV0dXJuO2NvbnN0IG49ZS5tYXRjaChjKTtpZihuKXJldHVybiBuW24ubGVuZ3RoLTFdfSl9LDg6ZnVuY3Rpb24oZSxuKXt2YXIgdD1bIk0iLCJNTSIsIlEiLCJEIiwiREQiLCJEREQiLCJEREREIiwiZCIsIkUiLCJXIiwiV1ciLCJZWSIsIllZWVkiLCJHRyIsIkdHR0ciLCJIIiwiSEgiLCJoIiwiaGgiLCJtIiwibW0iLCJzIiwic3MiLCJTIiwiU1MiLCJTU1MiLCJaIiwiWloiLCJYIiwieCJdO2UuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgbj1bXTtmb3IodmFyIHUgaW4gZSllLmhhc093blByb3BlcnR5KHUpJiZuLnB1c2godSk7dmFyIHI9dC5jb25jYXQobikuc29ydCgpLnJldmVyc2UoKTtyZXR1cm4gbmV3IFJlZ0V4cCgiKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oIityLmpvaW4oInwiKSsifC4pIiwiZyIpfX19KTs=`);

    document.documentElement.appendChild(inject);
}());