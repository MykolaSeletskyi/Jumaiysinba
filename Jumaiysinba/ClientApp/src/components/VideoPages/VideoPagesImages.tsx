import React from 'react';

export interface VideoPagesImages {
    PlayBtnIcon?: any;
    DownloadBtnIcon?: any;
    StopBtnIcon?: any;
    StartRecordBtnIcon?: any;
    ScreenBtnIcon?: any;
    ErrorAccessBtnIcon?: any;
    ArrowStopPlayIcon?: any;
    ArrowStopRecordIcon?: any;
    ArrowShareAccessIcon?: any;
    VideoPerson?: any;
}

const VideoPagesImages: VideoPagesImages = {};

VideoPagesImages.PlayBtnIcon = class PlayBtnIcon extends React.Component<any, {}> {
    render() {
        return <svg className={this.props.className} width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.98906 0.337891H2.72656C2.72656 0.337891 2.73906 0.37539 2.75156 0.37539C3.31406 0.42539 3.80156 0.662891 4.27656 0.925391C9.83906 4.11289 15.4016 7.30039 20.9641 10.4879C21.3516 10.7129 21.7141 10.9754 22.0391 11.3004C22.9391 12.2254 22.9891 13.3754 22.1641 14.3504C21.8266 14.7504 21.4141 15.0504 20.9641 15.3004C15.4141 18.4879 9.85156 21.6754 4.30156 24.8629C3.90156 25.0879 3.48906 25.2754 3.05156 25.3879C1.86406 25.7004 0.814064 25.1629 0.364064 24.0254C0.151564 23.5004 0.101562 22.9504 0.101562 22.3879C0.101562 16.0629 0.101562 9.72539 0.101562 3.40039C0.101562 3.25039 0.101563 3.10039 0.114063 2.96289C0.176563 2.17539 0.364063 1.43789 0.964063 0.862891C1.26406 0.575391 1.63906 0.462891 2.01406 0.337891H1.98906Z" fill="#F3BAD6" />
        </svg>
    }
}
VideoPagesImages.DownloadBtnIcon = class DownloadBtnIcon extends React.Component<any, {}> {
    render() {
        return <svg className={this.props.className} width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.426563 13.662C0.426563 13.737 0.464063 13.812 0.489063 13.887C1.63906 18.8745 2.80156 23.862 3.93906 28.8495C4.36406 30.7495 5.40156 32.112 7.22656 32.837C8.42656 33.312 9.68906 33.187 10.9391 33.1495C10.9141 33.1495 10.8891 33.1245 10.8641 33.112C8.58906 32.8245 6.93906 31.3495 6.40156 29.137C6.03906 27.612 5.70156 26.0995 5.33906 24.5745C4.48906 20.8995 3.63906 17.212 2.78906 13.537C2.55156 12.512 2.78906 11.637 3.56406 10.912C3.91406 10.587 4.36406 10.462 4.78906 10.2995C4.33906 10.2995 3.90156 10.287 3.45156 10.2745C3.41406 10.2745 3.37656 10.2745 3.33906 10.2745C2.00156 10.1995 0.964063 10.6495 0.426563 11.962C0.401563 12.012 0.326562 12.212 0.351562 12.212C0.351562 12.212 0.289063 12.912 0.414063 13.6495L0.426563 13.662Z" fill="#F5AD3E" />
            <path d="M16.0154 4.48711C16.0154 3.82461 16.0279 3.14961 16.0404 2.48711C16.0404 1.53711 16.6779 0.849609 17.6279 0.837109C19.2404 0.812109 20.8529 0.812109 22.4654 0.837109C23.4154 0.849609 24.0404 1.53711 24.0529 2.48711C24.0529 3.14961 24.0654 3.82461 24.0779 4.48711V10.2871C24.0779 11.5871 24.0779 12.8746 24.0529 14.1746C24.0529 14.4371 24.1779 14.4621 24.3904 14.4621C25.2154 14.4621 26.0279 14.4621 26.8529 14.4621C27.2654 14.4621 27.5904 14.5871 27.7529 14.9746C27.9154 15.3621 27.7779 15.6871 27.4904 15.9871C25.2654 18.2746 23.0404 20.5746 20.8154 22.8621C20.2404 23.4496 19.8279 23.4496 19.2529 22.8621C17.0279 20.5746 14.8029 18.2746 12.5779 15.9871C12.2904 15.6996 12.1529 15.3746 12.3154 14.9871C12.4779 14.5996 12.8154 14.4621 13.2154 14.4746C14.0404 14.4746 14.8529 14.4746 15.6779 14.4746C15.8779 14.4746 16.0154 14.4496 16.0154 14.1871C16.0029 12.8871 16.0029 11.5996 15.9904 10.2996C15.9904 8.36211 15.9904 6.43711 15.9904 4.49961L16.0154 4.48711Z" fill="#F3BAD6" />
            <path d="M24.0762 10.288V4.48798C27.6137 4.48798 31.1637 4.47548 34.7012 4.48798C36.5137 4.48798 37.6137 5.92548 37.2012 7.70048C37.0012 8.56298 36.8012 9.42548 36.6137 10.2755C33.4012 10.2755 30.1762 10.2755 26.9637 10.2755C26.0012 10.2755 25.0387 10.2755 24.0762 10.2755V10.288Z" fill="#F8AD3E" />
            <path d="M16.0129 4.4873C16.0129 6.4248 16.0129 8.3498 16.0129 10.2873C12.6254 10.2873 9.25044 10.2873 5.86294 10.2873C5.66294 9.4123 5.48794 8.53731 5.26294 7.67481C4.82544 6.02481 6.06294 4.4873 7.57544 4.4998C9.86294 4.4998 12.1504 4.4998 14.4379 4.4873C14.9629 4.4873 15.4879 4.4873 16.0129 4.4873Z" fill="#F8AD3E" />
            <path d="M7.57563 4.49944C6.06313 4.48694 4.81313 6.02444 5.26313 7.67444C5.50063 8.53694 5.66313 9.42444 5.86313 10.2869C5.51313 10.2869 5.15063 10.2994 4.80063 10.3119C4.35063 10.3119 3.91313 10.2994 3.46313 10.2869C3.23813 9.32444 2.98813 8.36194 2.80063 7.37444C2.53813 6.02444 3.51313 4.69944 4.88813 4.51194C5.77563 4.38694 6.67563 4.42444 7.57563 4.51194V4.49944Z" fill="#EC8D05" />
            <path d="M12.4641 26.1622C12.0141 26.5872 11.7266 26.5622 11.3641 26.0747C11.2391 24.9122 12.0641 23.8997 13.2391 23.7872C14.3391 23.6747 15.3766 24.5372 15.4891 25.6497C15.5391 26.0997 15.3266 26.4122 14.9641 26.4622C14.6266 26.5122 14.3766 26.2747 14.2891 25.8247C14.1891 25.2747 13.8891 24.9872 13.4141 24.9872C12.9391 24.9872 12.6391 25.2747 12.5391 25.8247C12.5141 25.9372 12.4891 26.0497 12.4641 26.1622Z" fill="#464251" />
            <path d="M28.7255 26.0862C28.363 26.5737 28.0755 26.5862 27.6255 26.1737C27.588 26.0112 27.563 25.8487 27.5255 25.6862C27.438 25.2737 27.1005 24.9987 26.6755 24.9987C26.2505 24.9987 25.913 25.2612 25.813 25.6862C25.8005 25.7487 25.788 25.8112 25.7755 25.8737C25.7005 26.2862 25.438 26.5112 25.113 26.4737C24.763 26.4237 24.563 26.1237 24.588 25.6987C24.6755 24.5737 25.738 23.6862 26.838 23.7987C28.013 23.9237 28.838 24.9362 28.713 26.0987L28.7255 26.0862Z" fill="#464251" />
            <path d="M20.0391 28.9126C19.2766 28.8876 18.6141 28.6251 18.0891 28.0626C17.8141 27.7626 17.8016 27.4251 18.0516 27.1751C18.2891 26.9376 18.6141 26.9501 18.9141 27.2126C19.7016 27.9001 20.3891 27.9001 21.1641 27.2126C21.4516 26.9501 21.7766 26.9376 22.0266 27.1751C22.2766 27.4126 22.2766 27.7626 22.0016 28.0626C21.4766 28.6251 20.8141 28.8876 20.0516 28.9126H20.0391Z" fill="#454150" />
            <path d="M31.4773 33.1121C31.4148 33.1496 31.3398 33.1622 31.2773 33.1247C31.3398 33.0872 31.4148 33.0871 31.4773 33.1121Z" fill="#F5AD3E" />
            <path d="M39.6401 12.0371C39.1526 10.7121 38.1276 10.2496 36.8026 10.2996C36.7401 10.2996 36.6776 10.2996 36.6151 10.2871C33.4026 10.2871 30.1776 10.2871 26.9651 10.2871C26.0026 10.2871 25.0401 10.2871 24.0776 10.2871C24.0776 11.5871 24.0776 12.8746 24.0526 14.1746C24.0526 14.4371 24.1776 14.4621 24.3901 14.4621C25.2151 14.4621 26.0276 14.4621 26.8526 14.4621C27.2651 14.4621 27.5901 14.5871 27.7526 14.9746C27.9151 15.3621 27.7776 15.6871 27.4901 15.9871C25.2651 18.2746 23.0401 20.5746 20.8151 22.8621C20.2401 23.4496 19.8276 23.4496 19.2526 22.8621C17.0276 20.5746 14.8026 18.2746 12.5776 15.9871C12.2901 15.6996 12.1526 15.3746 12.3151 14.9871C12.4776 14.5996 12.8151 14.4621 13.2151 14.4746C14.0401 14.4746 14.8526 14.4746 15.6776 14.4746C15.8776 14.4746 16.0151 14.4496 16.0151 14.1871C16.0026 12.8871 16.0026 11.5996 15.9901 10.2996C12.6026 10.2996 9.22756 10.2996 5.84006 10.2996C5.49006 10.2996 5.12756 10.3121 4.77756 10.3246C4.35256 10.4871 3.90256 10.5996 3.55256 10.9371C2.77756 11.6621 2.54006 12.5371 2.77756 13.5621C3.62756 17.2371 4.47756 20.9246 5.32756 24.5996C5.67756 26.1246 6.02756 27.6496 6.39006 29.1621C6.91506 31.3746 8.57756 32.8496 10.8526 33.1371C10.8776 33.1371 10.9026 33.1621 10.9276 33.1746C11.2026 33.1746 11.4651 33.1746 11.7401 33.1746C18.0651 33.1746 24.4026 33.1746 30.7276 33.1746C30.9026 33.1746 31.0901 33.1496 31.2651 33.1496C31.3276 33.1121 31.4026 33.1121 31.4651 33.1371C33.6401 33.0621 35.5401 31.3871 36.0651 29.1121C37.2401 24.0121 38.4276 18.8996 39.6026 13.7996C39.6276 13.6996 39.6526 12.1121 39.6276 12.0621L39.6401 12.0371Z" fill="#F8EA6B" />
        </svg>
    }
}
VideoPagesImages.StopBtnIcon = class StopBtnIcon extends React.Component<any, {}> {
    render() {
        return <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.8734 0.337402H3.12344C1.58394 0.337402 0.335938 1.58541 0.335938 3.1249V20.8749C0.335938 22.4144 1.58394 23.6624 3.12344 23.6624H20.8734C22.4129 23.6624 23.6609 22.4144 23.6609 20.8749V3.1249C23.6609 1.58541 22.4129 0.337402 20.8734 0.337402Z" fill="#74C8F4" />
        </svg>
    }
}
VideoPagesImages.StartRecordBtnIcon = class StartRecordBtnIcon extends React.Component<any, {}> {
    render() {
        return <svg className={this.props.className} width="36" height="19" viewBox="0 0 36 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.01188 8.93968C6.71938 8.93968 6.42688 8.82718 6.20188 8.59468L4.82187 7.16968C4.70937 7.04968 4.54438 6.98218 4.37937 6.98218H2.23438C1.61187 6.98218 1.10938 6.47968 1.10938 5.85718C1.10938 5.23468 1.61187 4.73218 2.23438 4.73218H4.37937C5.15188 4.73218 5.90188 5.04718 6.44187 5.60968L7.82188 7.03468C8.25688 7.48468 8.24187 8.19718 7.79187 8.62468C7.57437 8.83468 7.28938 8.93968 7.01188 8.93968Z" fill="#4A525B" />
            <path d="M17.9184 0.577393H13.2534C11.1534 0.577393 9.44336 2.28739 9.44336 4.38739V5.93239C9.44336 6.55489 9.94586 7.05739 10.5684 7.05739C11.1909 7.05739 11.6934 6.55489 11.6934 5.93239V4.38739C11.6934 3.52489 12.3909 2.82739 13.2534 2.82739H17.9184C18.7809 2.82739 19.4784 3.52489 19.4784 4.38739V5.93239C19.4784 6.55489 19.9809 7.05739 20.6034 7.05739C21.2259 7.05739 21.7284 6.55489 21.7284 5.93239V4.38739C21.7284 2.28739 20.0184 0.577393 17.9184 0.577393Z" fill="#4A525B" />
            <path d="M23.3236 5.50513H12.0436C11.7661 6.15013 11.4061 7.43263 11.4886 9.64513C11.6086 12.8551 12.9211 15.2701 15.5836 17.5201H23.3236C24.6886 17.5201 25.7986 16.4101 25.7986 15.0451V7.98013C25.7986 6.61513 24.6886 5.50513 23.3236 5.50513Z" fill="#F8C7DE" />
            <path d="M11.4892 9.64513C11.4067 7.43263 11.7667 6.15013 12.0442 5.50513H7.79922C6.43422 5.50513 5.32422 6.61513 5.32422 7.98013V15.0451C5.32422 16.4101 6.43422 17.5201 7.79922 17.5201H15.5842C12.9217 15.2701 11.6167 12.8551 11.4892 9.64513Z" fill="#F3BAD6" />
            <path d="M19.5004 8.20532H11.5804C11.5804 8.20532 11.5279 8.20532 11.5054 8.21282C11.4529 8.72282 11.1979 11.9328 13.2229 14.9553H19.5004C20.6179 14.9553 21.5254 14.0478 21.5254 12.9303V10.2303C21.5254 9.11282 20.6179 8.20532 19.5004 8.20532Z" fill="#FAD9E9" />
            <path d="M11.5047 8.21289C10.4247 8.25039 9.55469 9.13539 9.55469 10.2304V12.9304C9.55469 14.0479 10.4622 14.9554 11.5797 14.9554H13.2222C11.1972 11.9329 11.4522 8.72289 11.5047 8.21289Z" fill="#F7C2DB" />
            <path d="M28.0195 8.04736H25.7845C25.5691 8.04736 25.3945 8.22197 25.3945 8.43736V14.6999C25.3945 14.9153 25.5691 15.0899 25.7845 15.0899H28.0195C28.2349 15.0899 28.4095 14.9153 28.4095 14.6999V8.43736C28.4095 8.22197 28.2349 8.04736 28.0195 8.04736Z" fill="#4A525B" />
            <path d="M28.9189 7.08001H31.1164C31.2664 7.08001 31.3864 7.20001 31.3864 7.35001V15.765C31.3864 15.915 31.2664 16.035 31.1164 16.035H28.9189C28.4164 16.035 28.0039 15.63 28.0039 15.12V7.98751C28.0039 7.48501 28.4089 7.07251 28.9189 7.07251V7.08001Z" fill="#BEBEBE" />
            <path d="M33.3823 14.2572C32.2948 12.2697 32.3698 7.16225 32.4223 5.67725L31.4698 6.02975C31.1998 6.12725 31.0273 6.38225 31.0273 6.66725V16.4697C31.0273 16.7547 31.2073 17.0097 31.4698 17.1072L34.5148 18.2397C34.9648 18.4047 35.4373 18.0747 35.4373 17.6022V17.0022C34.7998 16.5522 34.2448 15.8022 33.3898 14.2422L33.3823 14.2572Z" fill="#F3BAD6" />
            <path d="M34.5077 4.90485L32.4227 5.68485C32.3777 7.16985 32.2952 12.2698 33.3827 14.2648C34.2377 15.8248 34.7927 16.5748 35.4302 17.0248V5.54985C35.4302 5.06985 34.9577 4.73985 34.5077 4.91235V4.90485Z" fill="#F8C7DE" />
            <path d="M1.78578 4.75483C2.48328 5.48233 2.43078 7.35733 2.40078 7.89733L3.00828 7.76983C3.18078 7.73233 3.29328 7.64233 3.29328 7.53733V3.94483C3.29328 3.83983 3.18078 3.74983 3.00828 3.71233L1.07328 3.29983C0.788281 3.23983 0.488281 3.35983 0.488281 3.53233V3.74983C0.893281 3.91483 1.24578 4.19233 1.79328 4.76233L1.78578 4.75483Z" fill="#BEBDBD" />
            <path d="M1.06516 8.18976L2.39266 7.90476C2.42266 7.35726 2.47516 5.48976 1.77766 4.76226C1.23016 4.19226 0.877656 3.91476 0.472656 3.74976V7.95726C0.472656 8.12976 0.772656 8.24976 1.05766 8.18976H1.06516Z" fill="#A8A9AA" />
        </svg>
    }
}
VideoPagesImages.ScreenBtnIcon = class ScreenBtnIcon extends React.Component<any, {}> {
    render() {
        return <svg className={this.props.className} width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8.5V3.565C1 2.1475 2.1475 1 3.565 1H8.4925" stroke="#4A525B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 17.6725V22.6075C1 24.025 2.1475 25.1725 3.565 25.1725H8.4925" stroke="#4A525B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M34.3382 8.5675V3.63251C34.3382 2.21501 33.1907 1.0675 31.7732 1.0675H26.8457" stroke="#4A525B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M34.3382 17.74V22.675C34.3382 24.0925 33.1907 25.24 31.7732 25.24H26.8457" stroke="#4A525B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.8934 16.3225C13.6834 16.3225 13.5184 16.1575 13.5184 15.9475C13.5184 15.1 13.3084 14.485 12.8959 14.125C12.5959 13.8625 12.2359 13.7725 11.9734 13.7425C11.7784 13.75 11.6284 13.7425 11.5684 13.7425V15.9475C11.5684 16.1575 11.4034 16.3225 11.1934 16.3225C10.9834 16.3225 10.8184 16.1575 10.8184 15.9475V11.17C10.8184 10.7575 11.1484 10.42 11.5534 10.42H11.5684C12.0859 10.42 12.7084 10.42 13.2109 10.585C14.0809 10.8625 14.2609 11.4925 14.2609 11.9725C14.2609 12.4525 14.0884 12.8425 13.7734 13.135C13.6234 13.2775 13.4509 13.3825 13.2634 13.465C13.3009 13.495 13.3384 13.525 13.3759 13.555C13.9684 14.065 14.2609 14.875 14.2609 15.9475C14.2609 16.1575 14.0959 16.3225 13.8859 16.3225H13.8934ZM11.7634 12.9775C11.8309 12.9775 11.9134 12.9775 11.9959 12.985C12.4084 12.9625 12.9559 12.865 13.2709 12.5725C13.4359 12.415 13.5184 12.2125 13.5184 11.9575C13.5184 11.605 13.3609 11.41 12.9859 11.29C12.5809 11.1625 12.0409 11.1625 11.5684 11.1625V12.985C11.6134 12.985 11.6809 12.9775 11.7634 12.9775V12.9775Z" fill="#F3BAD6" />
            <path d="M18.4829 13.7425C18.6929 13.7425 18.8579 13.5775 18.8579 13.3675C18.8579 13.1575 18.6929 12.9925 18.4829 12.9925H16.9004V11.7175C16.9004 11.41 17.1479 11.1625 17.4554 11.1625H18.4829C18.6929 11.1625 18.8579 10.9975 18.8579 10.7875C18.8579 10.5775 18.6929 10.4125 18.4829 10.4125H17.4554C16.7354 10.4125 16.1504 10.9975 16.1504 11.7175V15.0175C16.1504 15.7375 16.7354 16.3225 17.4554 16.3225H18.4829C18.6929 16.3225 18.8579 16.1575 18.8579 15.9475C18.8579 15.7375 18.6929 15.5725 18.4829 15.5725H17.4554C17.1479 15.5725 16.9004 15.325 16.9004 15.0175V13.7425H18.4829V13.7425Z" fill="#F3BAD6" />
            <path d="M22.4123 16.3225H22.2923C21.3773 16.3225 20.6348 15.58 20.6348 14.665V12.07C20.6348 11.155 21.3773 10.4125 22.2923 10.4125H22.4123C23.3273 10.4125 24.0698 11.155 24.0698 12.07V12.1525C24.0698 12.3625 23.9048 12.5275 23.6948 12.5275C23.4848 12.5275 23.3198 12.3625 23.3198 12.1525V12.07C23.3198 11.5675 22.9148 11.1625 22.4123 11.1625H22.2923C21.7898 11.1625 21.3848 11.5675 21.3848 12.07V14.665C21.3848 15.1675 21.7898 15.5725 22.2923 15.5725H22.4123C22.9148 15.5725 23.3198 15.1675 23.3198 14.665V14.4325C23.3198 14.2225 23.4848 14.0575 23.6948 14.0575C23.9048 14.0575 24.0698 14.2225 24.0698 14.4325V14.665C24.0698 15.58 23.3273 16.3225 22.4123 16.3225V16.3225Z" fill="#F3BAD6" />
            <path d="M29.2751 7.38249C30.0041 7.38249 30.5951 6.79151 30.5951 6.06249C30.5951 5.33348 30.0041 4.74249 29.2751 4.74249C28.5461 4.74249 27.9551 5.33348 27.9551 6.06249C27.9551 6.79151 28.5461 7.38249 29.2751 7.38249Z" fill="#F8C7DE" />
        </svg>
    }
}
VideoPagesImages.ErrorAccessBtnIcon = class ErrorAccessBtnIcon extends React.Component<any, {}> {
    render() {
        return <svg className={this.props.className} width="8" height="37" viewBox="0 0 8 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.59921 4.14961L6.47421 24.4621C6.24921 27.5496 1.74921 27.5496 1.52421 24.4621L0.39921 4.14961C0.31171 -0.875391 7.68671 -0.875391 7.59921 4.14961Z" fill="#EE706C" />
            <path d="M3.99844 36.6004C5.88311 36.6004 7.41094 35.0726 7.41094 33.1879C7.41094 31.3032 5.88311 29.7754 3.99844 29.7754C2.11377 29.7754 0.585938 31.3032 0.585938 33.1879C0.585938 35.0726 2.11377 36.6004 3.99844 36.6004Z" fill="#EE706C" />
        </svg>

    }
}
VideoPagesImages.ArrowStopPlayIcon = class VideoPerson extends React.Component<any, {}> {
    render() {
        return <svg className={this.props.className} width="24" height="68" viewBox="0 0 24 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.9288 13.2601C21.8188 10.6701 21.1188 7.89011 20.6388 5.11011C20.7988 2.76011 19.3788 0.180112 16.3288 0.0201115C12.2188 -0.199888 8.38876 1.37011 4.33876 1.54011C-1.43124 1.78011 -1.46124 10.7801 4.33876 10.5401C5.09876 10.5101 5.85876 10.4201 6.61876 10.3101C-2.85124 27.0801 0.718758 49.8901 11.8388 65.0901C15.2288 69.7201 23.0388 65.2301 19.6088 60.5501C10.5588 48.1701 6.44876 29.2001 14.1188 15.2201C14.4388 16.0801 14.7888 16.9401 15.1588 17.8101C16.1088 20.0501 19.4088 20.5401 21.3188 19.4201C23.6288 18.0701 23.8888 15.5101 22.9288 13.2601Z" fill="#74C8F4" />
        </svg>
    }
}
VideoPagesImages.ArrowStopRecordIcon = class VideoPerson extends React.Component<any, {}> {
    render() {
        return <svg className={this.props.className} width="66" height="53" viewBox="0 0 66 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.27514 6.04525C1.42917 11.5483 1.26847 17.1825 0.866818 22.7277C0.421211 28.9396 10.0871 28.9873 10.5325 22.8044C10.5872 22.0025 10.6418 21.2007 10.6773 20.389C22.6443 36.2012 40.0494 47.6392 59.5306 52.0469C65.5805 53.4192 68.2448 44.1221 62.1756 42.7497C44.2287 38.6828 28.5452 28.3218 17.8058 13.7372C19.6701 13.8969 21.5156 13.9889 23.2547 14.0897C29.4673 14.4483 29.5343 4.78262 23.3314 4.42408C20.7614 4.27803 18.2015 4.06439 15.6528 3.66718C14.0405 3.41273 11.9056 3.25079 10.6582 2.09061C10.5814 2.02234 10.5045 1.96373 10.4373 1.9052C7.52426 -1.30777 1.83535 1.77895 2.28473 6.05499L2.27514 6.04525Z" fill="#74C8F4" />
        </svg>
    }
}
VideoPagesImages.ArrowShareAccessIcon = class VideoPerson extends React.Component<any, {}> {
    render() {
        return <svg className={this.props.className} width="50" height="85" viewBox="0 0 50 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.859 32.787C39.3443 24.4847 32.5011 16.7574 24.5558 10.7732C29.2305 11.0428 33.9052 11.2315 38.5889 11.3124C44.3123 11.4112 44.3123 2.426 38.5889 2.32716C27.1953 2.12948 15.8373 1.35676 4.5238 0.0359328C1.88427 -0.278549 0.480076 1.51849 0.311217 3.5761C-0.230909 5.02272 -0.124261 6.72991 1.14662 8.20348C7.97208 16.1823 8.24758 25.4461 7.99874 35.5275C7.85654 41.3139 16.7439 41.305 16.886 35.5275C17.0727 28.0518 16.6905 21.1691 14.6376 14.7537C23.2227 20.0639 30.7947 27.9619 35.6027 36.2822C43.3258 49.6792 42.5526 64.5227 36.1182 78.1623C33.6653 83.3557 41.3261 87.9202 43.7879 82.6998C51.4488 66.4725 52.6486 48.9783 43.859 32.796V32.787Z" fill="#FFC8E2" />
        </svg>
    }
}
VideoPagesImages.VideoPerson = class VideoPerson extends React.Component<any, {}> {
    render() {
        return <svg className={this.props.className} width="377" height="359" viewBox="0 0 377 359" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M111.217 249.297C106.454 255.925 106.393 264.682 105.635 272.496C104.786 281.162 104.027 289.827 103.42 298.523C102.177 315.885 101.388 333.277 101.024 350.7C100.811 360.49 115.98 360.49 116.192 350.7C116.526 334.281 117.254 317.892 118.377 301.503C118.923 293.567 119.56 285.631 120.318 277.696C120.925 271.189 120.318 262.493 124.323 256.959C126.719 253.614 124.899 248.476 121.592 246.56C117.77 244.31 113.614 245.952 111.217 249.297Z" fill="#F3BAD6" />
            <path d="M236.449 273.286C239.392 299.223 239.544 325.402 236.874 351.399C236.449 355.503 240.666 359 244.458 359C248.918 359 251.618 355.503 252.043 351.399C254.712 325.432 254.561 299.253 251.618 273.286C251.163 269.212 248.463 265.685 244.034 265.685C240.302 265.685 235.994 269.182 236.449 273.286Z" fill="#F3BAD6" />
            <path d="M61.4033 120.893C47.2661 121.441 33.2807 125.728 22.3897 135.032C16.8683 139.745 12.8335 145.887 9.95143 152.515C6.52333 160.451 3.51995 168.57 0.364882 176.627C-1.12164 180.458 2.00309 184.958 5.67389 185.992C9.98176 187.178 13.5009 184.532 15.0177 180.671C17.6267 174.043 20.2054 167.019 22.8751 160.634C25.5447 154.248 27.8807 150.417 32.5526 146.282C33.038 145.856 33.5234 145.431 34.0391 145.005C33.1594 145.704 35.0403 144.306 35.0099 144.306C36.1021 143.546 37.2245 142.846 38.347 142.208C41.2594 140.566 42.4425 140.019 45.2639 139.046C48.0852 138.073 50.9369 137.343 53.819 136.796C54.4864 136.674 55.1538 136.552 55.8212 136.461C56.5797 136.339 55.3358 136.461 56.61 136.37C58.2179 136.218 59.7954 136.096 61.4033 136.035C65.4988 135.883 68.9876 132.66 68.9876 128.434C68.9876 124.451 65.5291 120.681 61.4033 120.833V120.893Z" fill="#F3BAD6" />
            <path d="M325.671 241.513C344.571 208.431 336.501 167.84 316.569 137.373C314.81 134.697 312.959 132.052 311.139 129.407C299.975 104.413 283.593 83.3421 265.391 61.1156C248.857 40.9262 230.23 16.9665 205.808 6.90221C185.088 -7.11481 162.517 2.21973 143.739 17.3922C124.899 32.595 108.153 50.5952 93.8035 70.2069C78.2709 107.606 58.7641 167.9 79.3327 196.847C110.398 240.54 175.35 208.614 175.35 208.614C175.35 208.614 178.111 244.523 227.257 260.06C259.384 270.215 286.839 268.634 302.008 266.324C311.503 260.121 319.694 251.972 325.64 241.543L325.671 241.513Z" fill="#F8C7DE" />
            <path d="M297.335 269.121L262.387 280.189C274.734 278.699 286.717 275.05 297.335 269.121Z" fill="#F6B7C7" />
            <path d="M314.657 263.618C314.657 263.618 310.076 265.047 302.036 266.263C300.519 267.266 298.942 268.209 297.334 269.091L314.657 263.618Z" fill="#EBB0BE" />
            <path d="M227.287 260.029C178.141 244.492 175.38 208.583 175.38 208.583C175.38 208.583 110.428 240.509 79.3628 196.816C58.7638 167.87 78.301 107.575 93.8336 70.1763C89.01 76.7743 84.4594 83.5244 80.2122 90.4569C63.4054 117.731 49.147 149.718 44.1717 181.583C37.8009 222.57 58.6728 264.955 104.603 266.08C130.724 266.719 150.655 253.827 165.429 235.462C177.413 256.016 197.223 271.462 221.978 277.665C234.932 280.918 248.857 281.8 262.417 280.158L297.366 269.09C298.974 268.209 300.521 267.266 302.068 266.263C286.899 268.573 259.444 270.155 227.317 259.999L227.287 260.029Z" fill="#F3BAD6" />
            <path d="M174.773 66.8624C190.305 77.0483 202.197 93.6802 213.422 108.245C226.376 125.059 236.933 142.147 240.635 163.248C243.729 181.066 265.511 191.07 281.681 186.6C300.429 181.431 308.104 163.309 304.98 145.461C300.065 117.214 285.079 92.7984 267.908 70.3894C250.373 47.4939 232.808 25.0545 208.447 9.09155C172.406 -14.5337 138.914 43.3588 174.773 66.8624Z" fill="#F8C7DE" />
            <path d="M205.11 112.075C209.332 112.075 212.755 108.645 212.755 104.413C212.755 100.181 209.332 96.751 205.11 96.751C200.888 96.751 197.465 100.181 197.465 104.413C197.465 108.645 200.888 112.075 205.11 112.075Z" fill="#282828" />
            <path d="M146.864 112.075C151.086 112.075 154.509 108.645 154.509 104.413C154.509 100.181 151.086 96.751 146.864 96.751C142.642 96.751 139.219 100.181 139.219 104.413C139.219 108.645 142.642 112.075 146.864 112.075Z" fill="#282828" />
            <path d="M164.64 134.606C165.368 134.028 165.914 133.268 166.46 132.538C166.703 132.204 166.915 131.869 167.158 131.535C166.794 132.052 167.158 131.657 167.34 131.383C167.583 131.17 167.522 131.201 167.128 131.505L167.431 131.292L167.765 131.109C167.31 131.292 167.219 131.322 167.552 131.201C167.856 131.14 168.159 131.018 168.462 130.957C167.401 131.17 168.523 131.049 168.735 131.049C168.371 131.049 168.098 130.927 168.644 131.049C169.646 131.322 168.068 130.592 168.918 131.17C169.615 131.626 168.766 130.957 169.13 131.322C169.373 131.565 169.615 131.809 169.858 132.052C170.829 133.116 171.648 134.332 172.74 135.275C175.865 137.981 179.748 139.015 183.783 138.163C187.211 137.434 190.396 135.153 192.52 132.417C193.976 130.532 194.492 127.765 192.52 125.971C190.882 124.481 187.636 123.964 186.088 125.971C185.633 126.548 185.148 127.096 184.632 127.613C184.632 127.613 183.57 128.494 184.207 128.038C183.904 128.251 183.601 128.464 183.297 128.646C182.994 128.829 182.66 129.011 182.327 129.163C182.903 128.92 182.266 129.163 181.993 129.224C181.659 129.315 181.052 129.407 181.72 129.346C181.295 129.407 180.87 129.346 180.446 129.346C180.901 129.346 180.749 129.407 180.385 129.315C180.264 129.285 179.111 128.829 179.869 129.194C179.778 129.163 178.807 128.616 179.232 128.859C179.657 129.103 178.807 128.494 178.747 128.403C177.715 127.4 176.927 126.153 175.895 125.15C173.165 122.444 169.464 121.349 165.702 122.231C164.003 122.626 162.334 123.569 161.091 124.785C160.393 125.454 159.816 126.305 159.24 127.096C159.119 127.248 158.542 127.947 159.119 127.309C158.846 127.613 158.573 127.886 158.269 128.13C156.419 129.65 156.57 133.025 158.269 134.576C160.241 136.37 162.729 136.187 164.701 134.576L164.64 134.606Z" fill="#282828" />
            <path d="M300.157 136.096C313.475 136.491 327.369 139.136 338.776 146.343C344.236 149.778 348.241 154.339 351.426 159.964C355.552 167.292 359.162 174.985 362.954 182.495C364.805 186.144 369.932 187.208 373.33 185.231C377.031 183.042 377.911 178.512 376.06 174.833C371.995 166.775 368.263 158.414 363.592 150.691C359.284 143.515 353.52 137.677 346.451 133.238C332.799 124.633 316.053 121.38 300.157 120.923C290.388 120.619 290.388 135.822 300.157 136.126V136.096Z" fill="#F8C7DE" />
        </svg>
    }
}

export default VideoPagesImages;