# iPhone, iPad, Android용 Kavita 리더 앱: 진행 상황, 북마크, 주석 동기화

**요약:** [BiblioFuse Reader](https://bibliofuse.com/ko/comicreader/)는 OPDS 피드만이 아니라 Kavita 자체 API를 통해 Kavita 서버에 연결합니다. 덕분에 읽기 진행 상황을 양방향으로 동기화하고, 북마크를 동기화하며, EPUB 하이라이트와 메모를 추가·편집·삭제까지 포함해 Kavita 웹 리더에서 보이는 주석과 동일하게 동기화할 수 있습니다. 설정은 QR 코드 한 번 스캔이면 끝납니다.

이 가이드에서는 무엇이 동기화되고 무엇이 안 되는지, 어떤 파일 형식을 지원하는지, 그리고 1분 안에 연결하는 방법을 설명합니다.

## 리더 앱에서 Kavita 진행 상황이 동기화되지 않는 이유

대부분의 서드파티 리더는 OPDS로 Kavita와 통신합니다. OPDS는 카탈로그 프로토콜입니다. 시리즈를 나열하고 파일을 전달하는 데는 좋지만, 읽기 위치나 북마크, 메모를 서버에 되돌려 쓰도록 설계된 적이 없습니다. Kavita 공식 문서도 Kavita 서버를 가장 풍부하게 활용하는 방법은 API라고 안내합니다.

휴대폰에서 한 권을 다 읽었는데 Kavita에는 여전히 읽지 않음으로 표시된 적이 있다면, 그 앱은 거의 확실히 OPDS만 사용하고 있었던 것입니다.

BiblioFuse는 Kavita API를 직접 사용합니다. 시리즈, 권, 챕터, 스페셜, 읽기 목록, 컬렉션이 Kavita에서와 같은 모습으로 표시되고, 리더에서 한 작업이 서버에 다시 기록됩니다.

## BiblioFuse와 Kavita 사이에 동기화되는 항목

| 기능 | Kavita 서버에서 BiblioFuse의 동작 |
|---|---|
| 읽기 진행 상황 | 양방향 동기화. 책을 열면 Kavita에 기록된 위치에서 이어지고, 더 읽으면 Kavita가 업데이트됩니다. |
| EPUB 정확한 위치 | 챕터 단위가 아니라 챕터 안의 위치에서 이어집니다. |
| 북마크 | 만화와 PDF는 페이지 북마크, EPUB은 본문 북마크를 Kavita에 저장합니다. |
| 하이라이트 | EPUB 하이라이트가 Kavita 주석 API로 동기화되며 서버의 하이라이트 색상을 사용합니다. |
| 메모 | Kavita 웹 리더에서 작성한 서식 있는 메모를 포함해 EPUB 메모가 동기화됩니다. |
| 주석 관리 | 리더나 주석 목록에서 하이라이트와 메모를 추가·편집·삭제할 수 있고, 변경 사항이 서버에 반영됩니다. |
| 오프라인 변경 | 먼저 기기에 저장된 뒤 서버에 다시 연결되면 전송됩니다. |

BiblioFuse에서 만든 하이라이트와 메모는 Kavita 웹 리더의 주석 서랍에 나타나고, 웹에서 만든 주석은 다음에 책을 열 때 BiblioFuse에 나타납니다.

## Kavita 서버에서의 파일 형식 지원

모든 형식이 모든 종류의 동기화를 지원하는 것은 아닙니다. 이는 Kavita가 형식별로 저장하는 내용의 한계이며, 바꿀 수 있는 설정이 아닙니다.

| 형식 | 읽기 | 진행 상황 | 북마크 | 하이라이트 / 메모 |
|---|---|---|---|---|
| CBZ / CBR | 스트리밍, 전체 다운로드 없음 | 동기화 | 페이지 북마크 | 지원 안 함 |
| EPUB | 스트리밍 | 동기화(챕터 내 위치 기준) | 동기화 | 동기화(Kavita 주석 API) |
| PDF | 지원 | 동기화(페이지 기준) | 페이지 북마크 | 지원 안 함(Kavita 주석은 EPUB 전용) |

실제로는 다음과 같습니다.

- **만화(CBZ, CBR)** 는 한 페이지씩 열립니다. 오프라인용으로 저장하지 않는 한 전체를 다운로드하지 않습니다.
- **EPUB** 은 진행 상황, 북마크, 하이라이트, 메모를 모두 지원합니다.
- **PDF** 는 페이지와 페이지 북마크가 동기화됩니다. Kavita에는 PDF용 주석 저장 기능이 없어 PDF 하이라이트는 기기에 남습니다.

## 1분 안에 Kavita 서버 추가하기

서버 연결에는 BiblioFuse Pro가 필요하며, Kavita 서버 주소와 Kavita 인증 키(Kavita 사용자 설정의 API 키 또는 서드파티 클라이언트 섹션)를 준비하세요.

### 방법 1: QR 코드 스캔(가장 빠름)

1. 컴퓨터에서 [BiblioFuse Kavita 및 Komga QR 생성기](https://bibliofuse.com/ko/tools/qr-generator/)를 엽니다.
2. **Kavita**를 선택하고 서버 주소를 입력한 뒤 인증 키를 붙여 넣습니다. QR 코드는 브라우저에서 생성되며 어디로도 전송되지 않습니다.
3. 휴대폰이나 태블릿에서 **BiblioFuse > 설정 > OPDS**를 열고 **QR 스캔 아이콘**을 탭합니다.
4. 코드를 스캔합니다. 주소와 키가 채워진 상태로 서버가 추가됩니다.

QR 코드는 비밀번호처럼 다루세요. 인증 키가 들어 있으므로 스크린샷을 공개하지 마세요.

### 방법 2: 직접 입력

**BiblioFuse > 설정 > OPDS > 서버 추가**를 열고 Kavita를 선택한 다음 주소(예: `http://192.168.1.20:5000`)와 인증 키를 직접 입력합니다.

서버를 추가했다면 라이브러리 상단의 위치 패널을 열고 Kavita 서버를 선택하세요. 단계별 스크린샷은 [설정 가이드](https://bibliofuse.com/ko/guide/)에 있습니다.

## 하이라이트와 메모 관리

Kavita EPUB에서 텍스트를 선택하면 하이라이트하거나 메모를 추가할 수 있습니다. Kavita 책에서는 색상 선택기에 서버의 다섯 가지 하이라이트 색상이 표시되므로, BiblioFuse와 Kavita 웹 리더에서 하이라이트가 똑같이 보입니다.

- **추가:** 텍스트를 선택한 뒤 하이라이트 또는 메모를 선택합니다.
- **편집:** 기존 하이라이트 안을 선택하고 주석 편집을 선택하거나 주석 목록에서 편집합니다. 색상과 메모를 바꿀 수 있습니다.
- **삭제:** 리더나 주석 목록에서 제거합니다. 삭제 내용이 Kavita로 전송됩니다.

주석 목록에는 현재 책의 모든 하이라이트와 메모가 검색 기능과 함께 표시되며, 항목을 탭하면 해당 구절로 바로 이동합니다.

## 지원 기기

- **iPhone, iPad, iPhone Duo:** 진행 상황, 북마크, 주석 동기화 지원(BiblioFuse 2.1.15).
- **Apple Vision Pro:** 네이티브 visionOS 앱에서 Kavita 라이브러리, 진행 상황, 북마크, 주석 지원(BiblioFuse 2.1.15).
- **Android 휴대폰 및 태블릿:** 진행 상황, 북마크, 주석 동기화 지원(BiblioFuse 2.0.16).
- **Apple TV 및 Android TV:** 사용자 네트워크의 BiblioFuse 호스트에서 읽으며 Kavita에는 연결하지 않습니다.

각 플랫폼이 무엇을 언제부터 지원하는지는 [기능 비교표](https://bibliofuse.com/ko/features/)에서 확인할 수 있습니다.

## Kavita 서버가 없나요? BiblioFuse에는 자체 호스트가 있습니다

Kavita는 훌륭한 서버이지만 꼭 필요한 것은 아닙니다. BiblioFuse에는 Mac, Windows PC, Docker, Synology NAS용 무료 호스트가 포함되어 있습니다. 이미 보관 중인 폴더를 지정하면 집 Wi-Fi로, 또는 Tailscale을 이용해 원격으로 다른 기기의 BiblioFuse에 스트리밍할 수 있습니다.

알아둘 차이점은, BiblioFuse 호스트에서는 읽기 진행 상황, 북마크, 하이라이트, 메모가 지원되는 **모든** 형식(CBZ, CBR, PDF, EPUB, TXT)에서 동기화된다는 것입니다. 형식별 서버 기능에 의존하지 않고 호스트가 주석을 직접 저장하기 때문입니다.

| | Kavita 서버 | BiblioFuse 호스트 |
|---|---|---|
| 실행 환경 | Docker, Windows, Linux, macOS | Mac, Windows PC, Docker, Synology |
| 진행 상황 동기화 | CBZ, CBR, EPUB, PDF | CBZ, CBR, PDF, EPUB, TXT |
| 북마크 동기화 | CBZ, CBR, EPUB, PDF | CBZ, CBR, PDF, EPUB, TXT |
| 하이라이트 / 메모 동기화 | EPUB | CBZ, CBR, PDF, EPUB, TXT |
| 웹 리더 | 있음 | 있음(NAS 및 Docker 호스트) |
| 다중 사용자 라이브러리 서버 | 예 | 아니요 — 개인용 라이브러리 호스트 |

둘 다 함께 쓸 수 있습니다. 만화는 Kavita에 두고 PDF나 텍스트 파일 폴더용으로 BiblioFuse 호스트를 추가하는 독자도 많습니다. 호스트 다운로드와 설정 도우미는 [BiblioFuse Reader](https://bibliofuse.com/ko/comicreader/)에서 확인하세요.

## Komga 및 기타 OPDS 서버

BiblioFuse는 Komga에도 네이티브로 연결하며, 읽기 진행 상황 양방향 동기화와 EPUB 정확한 위치를 지원합니다. 북마크와 주석 동기화는 Kavita 전용입니다. Komga에는 이를 위한 API가 없기 때문입니다. 그 밖의 OPDS 1.x 서버는 카탈로그로 사용할 수 있고, 서버가 OPDS-PSE를 지원하면 한 페이지씩 스트리밍됩니다.

서버에 올리기 전에 컬렉션을 어떻게 정리할지 고민 중이라면 [디지털 만화 라이브러리 관리 가이드](https://bibliofuse.com/ko/blog/digital-comic-library-management-guide/)와 [CBZ, CBR, EPUB 비교](https://bibliofuse.com/ko/blog/cbz-vs-cbr-vs-epub-formats-explained/)가 좋은 출발점입니다.

## FAQ

**BiblioFuse는 Kavita와 읽기 진행 상황을 동기화하나요?**
네, 양방향으로 동기화합니다. BiblioFuse는 Kavita API를 사용하므로 책은 Kavita에 기록된 위치에서 이어지고, 읽는 동안 진행 상황이 다시 기록됩니다. CBZ, CBR, EPUB, PDF에서 작동합니다.

**iPhone이나 iPad에서 하이라이트와 메모를 Kavita와 동기화할 수 있나요?**
네, EPUB 책에서 가능합니다. BiblioFuse에서 만든 하이라이트와 메모는 Kavita 주석 API로 저장되어 Kavita 웹 리더에 나타납니다. 어느 쪽에서든 추가·편집·삭제할 수 있습니다.

**Kavita에서 CBZ, CBR, PDF의 하이라이트가 지원되지 않는 이유는 무엇인가요?**
Kavita는 EPUB에 대해서만 주석을 저장합니다. 만화와 PDF도 읽기 진행 상황과 페이지 북마크는 동기화됩니다. PDF나 만화의 하이라이트와 메모까지 동기화하려면 모든 형식을 지원하는 BiblioFuse 호스트를 사용하세요.

**Kavita에서 만화를 읽으려면 전체를 다운로드해야 하나요?**
아니요. CBZ와 CBR은 한 페이지씩 스트리밍됩니다. 원하면 오프라인용으로 책을 저장할 수 있습니다.

**BiblioFuse에 Kavita 서버를 추가하는 가장 빠른 방법은 무엇인가요?**
브라우저에서 BiblioFuse QR 생성기로 QR 코드를 만든 다음, 앱에서 설정 > OPDS를 열고 QR 스캔 아이콘을 탭하세요. 서버 주소와 인증 키가 자동으로 입력됩니다.

**BiblioFuse의 Kavita 지원은 무료인가요?**
로컬 파일 읽기는 무료입니다. Kavita, Komga, OPDS 서버 연결은 BiblioFuse Pro에 포함되며, Pro는 월간 또는 연간 구독이나 일회성 평생 구매로 이용할 수 있습니다.

**BiblioFuse는 인터넷을 통해 Kavita에 연결할 수 있나요?**
네. 리버스 프록시, VPN 또는 Tailscale로 집 밖에서 Kavita 서버에 접속할 수 있다면 그 주소를 입력하세요. BiblioFuse는 같은 방식으로 연결합니다.

**Kavita와 BiblioFuse 호스트를 동시에 사용할 수 있나요?**
네. 둘 다 위치 패널에 표시되며 각각 자체 진행 상황, 북마크, 주석을 유지합니다.
