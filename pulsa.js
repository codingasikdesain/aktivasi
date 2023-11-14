$('#nohp').on('input', function () {
      $('#nohp').change()
    })
    $(document).ready(function () {
      $('.mySelect').off('input')
      $('.mySelect').on('input', function () {
        let data = $(this).val()
        getData(data)
      });
    });
    var nohp = []
    $('#nohp').on('change', function () {
      var no = $(this).val()
      newno = no.replace('-', '')
      var cek = newno.substring(0, 3).replace('-', '')
      var ceka = newno.substring(3, 16).replace('-', '')
      if (cek == '+62') {
        let result = 0
        $(this).val(result + ceka)
        getNmr(result + ceka)
      } else {
        $(this).val(cek + ceka)
        getNmr(cek + ceka)
      }
    });
    function getNmr(val) {
      var id = val.substring(0, 4)
      if (id.length > 3 && nohp[0] != id) {
        nohp[0] = id
        cekNmr(nohp[0])
      } else {
      }
    }
    function cekNmr(id) {
      $('#display').removeClass('d-none')
      if (id.length < 4) {
        $('span#addon_pulsa').html('Error')
        $('#display').hide()
        $('#info').html("<div class='d-grid'><div class= 'container text-center' > Nomor Tidak Lengkap / Kode Operator Tidak Ditemukan.</div></div > ")
      } else {
        $('#display').show()
        $('#info').html('')
        $('#loading').html('')
        if (id == 0851 || id == 0811 || id == 0812 || id == 0813 || id == 0821 || id == 0822 || id == 0823 || id == 0852 || id == 0853) {
          $('span#addon_pulsa').html('')
          $('span#addon_pulsa').html('<img src="https://bukaolshop.s3-id-jkt-1.kilatstorage.id/153444/24139554.jpg"></img>')
          $('span#addon_pulsa2').html('<img src="https://bukaolshop.s3-id-jkt-1.kilatstorage.id/153444/24139554.jpg"></img>')
          $('span#addon_pulsa_opt').html('Telkomsel')
          $('span#addon_pulsa_opt2').html('Telkomsel')
          data = datatsel
        }
        else if (id == 0814 || id == 0815 || id == 0816 || id == 0855 || id == 0856 || id == 0857 || id == 0858) {
          $('span#addon_pulsa').html('')
          $('span#addon_pulsa').html('<img src="https://blogger.googleusercontent.com/img/a/AVvXsEie4s82f7yrig0KCeuMfkXwprS1FEoeaowqIJLQ2hvOEXciAXyum-w6qfhsZX6iGXtlf3w80hXECmC8s3tXgaMIKBzBtqsX33T0idAUdnLZoPPo1oh9OXmdINdng5ZsIDXV9Rp1Px4OEGbGsT8vRaRmu-UiYCj1LcrO2-dgfHdB0qC_FonvfveLdQRI"></img>')
          $('span#addon_pulsa2').html('<img src="https://blogger.googleusercontent.com/img/a/AVvXsEie4s82f7yrig0KCeuMfkXwprS1FEoeaowqIJLQ2hvOEXciAXyum-w6qfhsZX6iGXtlf3w80hXECmC8s3tXgaMIKBzBtqsX33T0idAUdnLZoPPo1oh9OXmdINdng5ZsIDXV9Rp1Px4OEGbGsT8vRaRmu-UiYCj1LcrO2-dgfHdB0qC_FonvfveLdQRI"></img>')
          $('span#addon_pulsa_opt').html('Indosat')
          $('span#addon_pulsa_opt2').html('Indosat')
          data = dataisat
        }
        else if (id == 0817 || id == 0818 || id == 0819 || id == 0859 || id == 0877 || id == 0878) {
          $('span#addon_pulsa').html('')
          $('span#addon_pulsa').html('<img src="https://blogger.googleusercontent.com/img/a/AVvXsEgMxDKed605oc90NvsCVhkrkWkRHfXCLcRW62F5jz_iwn2Ed31Sr4FYSlEbh-iywTZ82rXZ07EZhs5Y4gFtBhZAUb-0a0Vz4lmh-dT3rg2OEAL5eWylvucIHC27vUg8tHescy42Pjl6PnxIxYx4UbsEMtp-ijDA2D8Yi3BcthWqhyb_Z1VXbNnlK18a"></img>')
          $('span#addon_pulsa2').html('<img src="https://blogger.googleusercontent.com/img/a/AVvXsEgMxDKed605oc90NvsCVhkrkWkRHfXCLcRW62F5jz_iwn2Ed31Sr4FYSlEbh-iywTZ82rXZ07EZhs5Y4gFtBhZAUb-0a0Vz4lmh-dT3rg2OEAL5eWylvucIHC27vUg8tHescy42Pjl6PnxIxYx4UbsEMtp-ijDA2D8Yi3BcthWqhyb_Z1VXbNnlK18a"></img>')
          $('span#addon_pulsa_opt').html('XL-Axiata')
          $('span#addon_pulsa_opt2').html('XL-Axiata')
          data = dataxl
        }
        else if (id == 0838 || id == 0831 || id == 0832 || id == 0833) {
          $('span#addon_pulsa').html('')
          $('span#addon_pulsa').html('<img src="https://blogger.googleusercontent.com/img/a/AVvXsEj4vDUtJZ_ash79waex3-wBA9C18p8NqlRwfq9whiWCaXH9NsrQm15hwrfHa-oi80QoHFc8D0obqhOg4CpYUDXw5FY_39jxZ8aoPAHbwgV9kuGuZotmJD1UKDv1Ws3sZFmAlY4ZtFNVzqGavCdTt5gMIiUvvB1tQ1Qio4p0z4ddB0dgKIXMRTUwZgFK"></img>')
          $('span#addon_pulsa2').html('<img src="https://blogger.googleusercontent.com/img/a/AVvXsEj4vDUtJZ_ash79waex3-wBA9C18p8NqlRwfq9whiWCaXH9NsrQm15hwrfHa-oi80QoHFc8D0obqhOg4CpYUDXw5FY_39jxZ8aoPAHbwgV9kuGuZotmJD1UKDv1Ws3sZFmAlY4ZtFNVzqGavCdTt5gMIiUvvB1tQ1Qio4p0z4ddB0dgKIXMRTUwZgFK"></img>')
          $('span#addon_pulsa_opt').html('Axis')
          $('span#addon_pulsa_opt2').html('Axis')
          data = dataaxis
        }
        else if (id == 0895 || id == 0896 || id == 0897 || id == 0898 || id == 0899) {
          $('span#addon_pulsa').html('')
          $('span#addon_pulsa').html('<img src="https://blogger.googleusercontent.com/img/a/AVvXsEi8X8yUzjHCPeVkjQVIbG9BZk3N8U03c4Qvf3A_bqRa7i7akwjtmL28SG0EzaIb3xwGHJgn9XanJ9zu4wHK3LB81Nd-DC84NflXj5nKQxLWsye5mebJusijtPd8UjNkuVkby-KUCcxWDwyROEkuhTC9iSXTqPrjlTGoaFDJFlDrx0KORl0-hbtPAw5_"></img>')
          $('span#addon_pulsa2').html('<img src="https://blogger.googleusercontent.com/img/a/AVvXsEi8X8yUzjHCPeVkjQVIbG9BZk3N8U03c4Qvf3A_bqRa7i7akwjtmL28SG0EzaIb3xwGHJgn9XanJ9zu4wHK3LB81Nd-DC84NflXj5nKQxLWsye5mebJusijtPd8UjNkuVkby-KUCcxWDwyROEkuhTC9iSXTqPrjlTGoaFDJFlDrx0KORl0-hbtPAw5_"></img>')
          $('span#addon_pulsa_opt').html('Tri')
          $('span#addon_pulsa_opt2').html('Tri')
          data = datatri
        }
        else if (id == 0881 || id == 0882 || id == 0883 || id == 0884 || id == 0885 || id == 0886 || id == 0887 || id == 0888 || id == 0889) {
          $('span#addon_pulsa').html('')
          $('span#addon_pulsa').html('<img src="https://blogger.googleusercontent.com/img/a/AVvXsEh-x2T0A9w_2-f_CMnBikOmQcjYCZjY9UVAVHcg1_PYT63zHBIfSQnjeCxL_6ETD1DBeblc59kzCS_3aDMDECXe0bzsHloI5iaL2oegMVqYkJseAwASoHTV4fKTzZoJJs2K6agWwI9VxbSiKP239aplHc-gLGpswaVkcIZLQfQfCs2ZgNI7cv4J1WrtWQ=s1600"></img>')
          $('span#addon_pulsa2').html('<img src="https://blogger.googleusercontent.com/img/a/AVvXsEh-x2T0A9w_2-f_CMnBikOmQcjYCZjY9UVAVHcg1_PYT63zHBIfSQnjeCxL_6ETD1DBeblc59kzCS_3aDMDECXe0bzsHloI5iaL2oegMVqYkJseAwASoHTV4fKTzZoJJs2K6agWwI9VxbSiKP239aplHc-gLGpswaVkcIZLQfQfCs2ZgNI7cv4J1WrtWQ=s1600"></img>')
          $('span#addon_pulsa_opt').html('Smartfren')
          $('span#addon_pulsa_opt2').html('Smartfren')
          data = datasmart
        }
        else {
          $('span#addon_pulsa').html('<i class="fas fa-do-not-enter" style="color:red;animation: pulse 1s infinite ease-in-out alternate;"></i>')
          $('#display').hide()
          $('#data').html('')
          $('#info').html("<div class='d-grid'><div class= 'container text-center' ><i class='fas fa-question-circle'></i> Nomor Tidak Dikenali / Kode Operator Tidak Ditemukan.</div></div > ")
        }
      }
      getKategori(data)
    }
    function getKategori(main) {
      $('#data').html('')
      $('#display').removeClass('d-none')
      $('#kategori').html('<option>Mengambil Data....</option>')
      var link = mylink
      $.ajax({
        type: "POST",
        url: "https://codingasik.my.id/admin/api/product.php",
        data: {
          api_key: api_key,
          nama: username,
          kategori: '',
          main: main,
        },
        dataType: "JSON",
        success: function (response) {
          $('#kategori').html('')
          $('#kategori').html('<option value="selected">Pilih Kategori</option>')
          if (response != 0) {
            $.each(response.data, function (i, v) {
              $('#kategori').append('<option value="' + v.href + '">' + v.nama + '</option>')
            });
          } else {
            $('#kategori').html("<div class='d-grid'><div class= 'container text-center' > Mohon Maaf Produk belum Tersedia.</div><a href='YOUR_STORE_URL/kategori/pulsa-215549' target='_blank' class='btn btn-outline-primary mx-auto my-2'>Pulsa Lainnya</a></div > ")
          }
          $('#loading').addClass('d-none')
        },
        error: function () {
        }
      });
    }
    function getData(kat) {
      var no = $('#nohp').val()
      var kategori = kat.substring(10)
      var link = mylink
      $.ajax({
        type: "POST",
        url: "https://codingasik.my.id/admin/api/product.php",
        data: {
          api_key: api_key,
          nama: username,
          main: '',
          kategori: kategori
        },
        dataType: "JSON",
        beforeSend: function () {
          $('#modalDetail').html('')
          $('#data').html('')
          for (let i = 0; i < 1; i++)
            $('#fake').append('<div class="coloading"><div class="loading"><span></span><span></span><span></span><span></span><span></span></div></div>')
        },
        success: function (response) {
          $('#loading').html('')
          $('#fake').html('')
          if (response.data.length !== 0) {
            $.each(response.data, function (i, v) {
              $('#data').append('<button class="codingasik-produk" id="btn-link" onclick="getDetail(\'' + v.links + '\')"><img class="d-block img-produk" src="' + v.img + '"><div class="w-100"><p id="prod-name" class="text-start name nama-item">' + v.names + '</p><p class="m-0 text-start harga-item">' + v.prices + '</p></div><div class="arrow"><i class="fas fa-angle-right"></i></div> </button>')
            });
          } else {
            $('#data').html("<div class='d-grid'><div class= 'container text-center' > Produk Belum Tersedia Saat Ini, kami akan segera menambahkan untuk anda. </div > ")
          }
        },
        error: function () {
        }
      })
      $(document).on('click', ".submit-form", function () {
        var no = $('#nohp').val()
        $('#link-extra-info input').val(no);
        $('#link-extra-info').attr('action', $(this).attr('href'));
        $('#link-extra-info').submit();
        return false;
      });
    }
    function getDetail(produk) {
      var no = $('#nohp').val()
      if (no == '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No Tujuan Tidak Boleh Kosong!',
        })
      } else {
        $("#linkBeli").attr("href", "#");
        $.ajax({
          type: "POST",
          url: "https://codingasik.my.id/admin/api/detail.php",
          data: {
            detail: produk,
            api_key: api_key,
            nama: username,
          },
          dataType: "JSON",
          beforeSend: function () {
            $('#nama_produk').text('Loading...')
            $('#no_tujuan').text('Loading...')
            $('#harga').text('Loading...')
            $('#short-desc').text('Loading...')
            $('#full-desc').text('Loading...')
            $("#linkBeli").attr("href", "" + mylink + produk);
            $('#mask').removeClass('d-none')
            $('#modalTrx').offcanvas('show')
            $('#no_tujuan').text(no)
          },
          success: function (result) {
            let response = result.data
            $('#nama_produk').text(response.name)
            $('#harga').text(response.price)
            $('#harga2').text(response.price)
            $('#short-desc').text(response.desc)
            $('#full-text').text(response.full_text)
            let text = response.full
            let formated = text.replace(/\|/g, '<br/>- ')
            $('#full-desc').append()
            $('#mask').addClass('d-none')
          },
          error: function () { }
        });
      }
    }
