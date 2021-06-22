class Dom {
    pilihKategori() {
        const studyValue = ['matematika', 'keislaman', 'programming', 'softskills', 'b-indonesia', 'b-inggris', 'b-arab', 'kti'];

        const fourStudyValue = studyValue.filter((eachValue) => {
            return document.querySelector(`input[value=${eachValue}]`).checked == true;
        });

        if (fourStudyValue.length != 4) {
            document.querySelector('.alert').innerHTML = '* Wajib memilih 4 kategori';
        } else {
            document.querySelector('.alert').innerHTML = '';

            let posisiTombol = 1;
            fourStudyValue.forEach((value) => {
                switch (value) {
                    case 'matematika':
                        document.querySelector(`.materi${posisiTombol}`).innerHTML = 'Matematika';
                        document.querySelector(`.materi${posisiTombol}`).setAttribute('onClick', 'location.href="https://www.youtube.com/channel/UCbUFjAuWzzr1ZIp6_C1vjEQ/videos"');
                        document.querySelector(`.materi${posisiTombol}`).style.backgroundColor = 'rgb(21, 21, 253)';
                        document.querySelector(`.materi${posisiTombol}`).style.boxShadow = '0 10px rgb(9, 9, 105)';
                        document.querySelector(`.materi${posisiTombol}`).style.cursor = 'pointer';
                        break;
                    case 'keislaman':
                        document.querySelector(`.materi${posisiTombol}`).innerHTML = 'Keislaman';
                        document.querySelector(`.materi${posisiTombol}`).setAttribute('onClick', 'location.href="https://www.youtube.com/channel/UCWXd8RmzbzFquWQkx1tI2RQ"');
                        document.querySelector(`.materi${posisiTombol}`).style.backgroundColor = 'rgb(6, 243, 6)';
                        document.querySelector(`.materi${posisiTombol}`).style.boxShadow = '0 10px green';
                        document.querySelector(`.materi${posisiTombol}`).style.cursor = 'pointer';
                        break;
                    case 'programming':
                        document.querySelector(`.materi${posisiTombol}`).innerHTML = 'Programming';
                        document.querySelector(`.materi${posisiTombol}`).setAttribute('onClick', 'location.href="https://progate.com"');
                        document.querySelector(`.materi${posisiTombol}`).style.backgroundColor = 'rgb(253, 48, 21)';
                        document.querySelector(`.materi${posisiTombol}`).style.boxShadow = '0 10px rgb(133, 13, 13)';
                        document.querySelector(`.materi${posisiTombol}`).style.cursor = 'pointer';
                        break;
                    case 'softskills':
                        document.querySelector(`.materi${posisiTombol}`).innerHTML = 'Soft Skills';
                        document.querySelector(`.materi${posisiTombol}`).setAttribute('onClick', 'location.href="https://youtube.com/playlist?list=PLzmDc1qq0Yg9fozfOLp6AVk9v_22-_sH0"');
                        document.querySelector(`.materi${posisiTombol}`).style.backgroundColor = 'rgb(253, 21, 195)';
                        document.querySelector(`.materi${posisiTombol}`).style.boxShadow = '0 10px purple';
                        document.querySelector(`.materi${posisiTombol}`).style.cursor = 'pointer';
                        break;
                    case 'b-indonesia':
                        document.querySelector(`.materi${posisiTombol}`).innerHTML = 'B.Indonesia';
                        document.querySelector(`.materi${posisiTombol}`).setAttribute('onClick', 'location.href="https://kbbi.kemdikbud.go.id"');
                        document.querySelector(`.materi${posisiTombol}`).style.backgroundColor = 'rgb(253, 48, 21)';
                        document.querySelector(`.materi${posisiTombol}`).style.boxShadow = '0 10px rgb(133, 13, 13)';
                        document.querySelector(`.materi${posisiTombol}`).style.cursor = 'pointer';
                        break;
                    case 'b-inggris':
                        document.querySelector(`.materi${posisiTombol}`).innerHTML = 'B.Inggris';
                        document.querySelector(`.materi${posisiTombol}`).setAttribute('onClick', 'location.href="https://www.youtube.com/channel/UC9Ay1lb1irYjbUR2bnRL4qA"');
                        document.querySelector(`.materi${posisiTombol}`).style.backgroundColor = 'rgb(21, 21, 253)';
                        document.querySelector(`.materi${posisiTombol}`).style.boxShadow = '0 10px rgb(9, 9, 105)';
                        document.querySelector(`.materi${posisiTombol}`).style.cursor = 'pointer';
                        break;
                    case 'b-arab':
                        document.querySelector(`.materi${posisiTombol}`).innerHTML = 'B.Arab';
                        document.querySelector(`.materi${posisiTombol}`).setAttribute('onClick', 'location.href="https://www.youtube.com/channel/UChzWR58zAqfv6I9hDSKQZ0Q"');
                        document.querySelector(`.materi${posisiTombol}`).style.backgroundColor = 'rgb(6, 243, 6)';
                        document.querySelector(`.materi${posisiTombol}`).style.boxShadow = '0 10px green';
                        document.querySelector(`.materi${posisiTombol}`).style.cursor = 'pointer';
                        break;
                    case 'kti':
                        document.querySelector(`.materi${posisiTombol}`).innerHTML = 'KTI';
                        document.querySelector(`.materi${posisiTombol}`).setAttribute('onClick', 'location.href="https://youtube.com/playlist?list=PLUrH5gy4T65VOuKZva3n7b0jXm3_c0O3V"');
                        document.querySelector(`.materi${posisiTombol}`).style.backgroundColor = 'rgb(253, 21, 195)';
                        document.querySelector(`.materi${posisiTombol}`).style.boxShadow = '0 10px purple';
                        document.querySelector(`.materi${posisiTombol}`).style.cursor = 'pointer';
                        break;
                }

                posisiTombol++;
            });
        }
    }
}

const jsHtmlDom = new Dom();