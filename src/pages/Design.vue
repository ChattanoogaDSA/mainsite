<template>
  <dsa-main>
    <section class="mb-8">
      <dsa-section-legend>Alerts</dsa-section-legend>
      <dsa-alert link-href="#">
        <template #title>Attention</template>

        This is an alert. The quick brown fox jumped over the lazy dog.

        <template #link>
          Click here to go somewhere important.
        </template>
      </dsa-alert>
    </section>

    <section class="mb-8">
      <dsa-section-legend>Banner</dsa-section-legend>
      <dsa-nav-bar>
        <template #primary>
          <dsa-nav-item href="#nowhere" active>Here</dsa-nav-item>
          <dsa-nav-item href="#nowhere">There</dsa-nav-item>
          <dsa-nav-item href="#nowhere">Everywhere</dsa-nav-item>
          <dsa-nav-item href="#nowhere">Anywhere</dsa-nav-item>
          <dsa-nav-item href="#nowhere">Nowhere</dsa-nav-item>
          <dsa-nav-item href="#nowhere">Elsewhere</dsa-nav-item>
        </template>
        <template #secondary>
          <dsa-nav-item-secondary href="#nowhere">Midnight</dsa-nav-item-secondary>
          <dsa-nav-item-secondary href="#nowhere" active>Evenings</dsa-nav-item-secondary>
          <dsa-nav-item-secondary href="#nowhere">Late</dsa-nav-item-secondary>
          <dsa-nav-item-secondary href="#nowhere">Into the Long Hours</dsa-nav-item-secondary>
          <dsa-nav-item-secondary href="#nowhere">Afternoon</dsa-nav-item-secondary>
          <dsa-nav-item-secondary href="#nowhere">Night</dsa-nav-item-secondary>
          <dsa-nav-item-secondary href="#nowhere">Twilight</dsa-nav-item-secondary>
          <dsa-nav-item-secondary href="#nowhere">Dusk</dsa-nav-item-secondary>
          <dsa-nav-item-secondary href="#nowhere">Dark</dsa-nav-item-secondary>
          <dsa-nav-item-secondary href="#nowhere">Sundown</dsa-nav-item-secondary>
          <dsa-nav-item-secondary href="#nowhere" class="italic">Post Meridiem</dsa-nav-item-secondary>
          <dsa-nav-item-secondary href="#nowhere">Beyond the normal part of day</dsa-nav-item-secondary>
          <dsa-nav-item-secondary href="#nowhere">Eve</dsa-nav-item-secondary>
          <dsa-nav-item-secondary href="#nowhere">Nightfall</dsa-nav-item-secondary>
        </template>
      </dsa-nav-bar>
    </section>

    <section class="mb-8">
      <dsa-section-legend>Callout (single)</dsa-section-legend>

      <dsa-callout>
        <template #title>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, amet!
        </template>

        <template #subtitle>
          AOC does it again!
        </template>

        <p>
          Lorem ipsum dolor sit amet, <a href="#nowhere">consectetur adipisicing elit</a>. Aut
          <em>consectetur</em> delectus excepturi fuga perspiciatis tenetur.
          Doloribus illum incidunt natus odio quod sint! Accusamus accusantium ducimus et iste iure laudantium, natus odit optio possimus repudiandae unde voluptatem voluptatibus. Accusamus amet aut eos harum nulla officia placeat sapiente, voluptatum?
        </p>
        <p>Assumenda consectetur, dicta, doloribus facilis ipsam libero quasi
          qui quis sed temporibus ullam veniam, <strong>voluptatum</strong>.</p>

        <template #links>
          <dsa-callout-btn href="#">
            Accusantium dolorem exercitationem expedita fugit.
          </dsa-callout-btn>
          <dsa-callout-btn href="#">
            Or this thing
          </dsa-callout-btn>
        </template>
      </dsa-callout>
    </section>

    <section class="mb-8">
      <dsa-section-legend>Callout (grid)</dsa-section-legend>
      <dsa-callout-grid>

        <dsa-callout tight>
          <template #title>Ex hic odit quo</template>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            quis recusandae velit. Delectus doloremque eius id impedit
            recusandae repellat tenetur.</p>

          <template #links>
            <dsa-callout-btn href="#">Read more!</dsa-callout-btn>
            <dsa-callout-btn href="#">Continue</dsa-callout-btn>
          </template>
        </dsa-callout>

        <dsa-callout tight>
          <template #title>Aperiam aut facere hic id molestiae sequi!</template>

          <p>Ratione, voluptatibus.
            Cupiditate deserunt dolore earum, illum ipsam non nulla ratione unde veritatis voluptate!
            Animi aperiam architecto cumque exercitationem fuga fugiat harum ipsa, laborum quaerat totam?
          </p>

          <template #links>
            <dsa-callout-btn href="#">Join</dsa-callout-btn>
          </template>
        </dsa-callout>

        <dsa-callout tight>
          <template #title>Atque enim fuga, molestias</template>
          <template #subtitle>March 21st, 2021 8am</template>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim non,
            officiis rem sit vel voluptatem?</p>
          <p>Aperiam corporis deserunt doloremque eveniet illo magnam maxime
            minus, nobis quas repellat sit suscipit tenetur?</p>
          <p>Asperiores consequatur ipsam molestias sapiente! Aspernatur
            corporis, dicta dignissimos fugit mollitia non optio placeat
            voluptatem?</p>

          <template #links>
            <dsa-callout-btn href="#">adipisicing elit</dsa-callout-btn>
          </template>
        </dsa-callout>

        <dsa-callout tight>
          <template #title>Asperiores blanditiis expedita explicabo officiis perspiciatis veritatis!</template>
          <template #subtitle>January 17, 2000</template>

          <p>A aspernatur nemo nostrum quos? Excepturi hic minus odit quaerat
            voluptas! Ex hic quam vitae.</p>
          <p>Asperiores optio placeat tempora ut! Amet assumenda blanditiis
            exercitationem ipsam natus necessitatibus quam quia, quos?</p>

          <template #links>
            <dsa-callout-btn href="#">Deleniti earum facere porro.</dsa-callout-btn>
          </template>
        </dsa-callout>

        <dsa-callout tight>
          <template #title>Asperiores blanditiis expedita explicabo officiis perspiciatis veritatis!</template>
          <template #subtitle>January 17, 2000</template>

          <p>A aspernatur nemo nostrum quos? Excepturi hic minus odit quaerat
            voluptas! Ex hic quam vitae.</p>
          <p>Asperiores optio placeat tempora ut! Amet assumenda blanditiis
            exercitationem ipsam natus necessitatibus quam quia, quos?</p>

          <template #links>
            <dsa-callout-btn href="#">Deleniti earum facere porro.</dsa-callout-btn>
          </template>
        </dsa-callout>
      </dsa-callout-grid>
    </section>

    <section class="mb-8">
      <dsa-section-legend>CMS Content</dsa-section-legend>
      <div class="content container-center px-4">
        <h1>H1 Header Cras eget leo non sapien tincidunt efficitur</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget leo non sapien tincidunt efficitur. Duis mattis nunc sit amet placerat gravida. Nulla facilisi. Nullam et ullamcorper massa, non blandit arcu. Donec vestibulum at nibh quis dignissim. Praesent sollicitudin nibh metus, in fringilla magna imperdiet quis. Mauris ut viverra ligula, vel pellentesque velit. Donec fermentum, nibh non aliquet sodales, ipsum ipsum accumsan eros, sit amet condimentum mi ipsum sed erat. Duis non luctus nisl, et tincidunt odio. Nulla vitae tristique ligula. Maecenas sed varius risus, eu volutpat ante.
        </p>

        <h2>H2 Header Cras eget leo non sapien tincidunt efficitur</h2>
        <p>
          Fusce in rhoncus justo, sed bibendum sem. In hac habitasse platea dictumst. Ut non odio non diam hendrerit luctus. Praesent commodo lacus vel nisl ultricies sodales. Etiam massa leo, aliquet in nunc in, mollis malesuada velit. Aliquam massa magna, pulvinar eget purus ut, posuere cursus lacus. Donec lobortis purus nibh, eget fermentum ante semper sit amet. Ut vitae vestibulum nisi, in elementum est. Suspendisse potenti.
        </p>

        <blockquote>
          <p>
            This is a quote. Tincidunt eget nullam non nisi est sit amet facilisis magna. Dui id ornare arcu odio ut. Sit amet luctus venenatis lectus magna.
          </p>
          <p>
            Mattis molestie a iaculis at erat pellentesque adipiscing. Sem viverra aliquet eget sit amet. Massa tempor nec feugiat nisl pretium. Malesuada pellentesque elit eget gravida cum. Senectus et netus et malesuada fames. Scelerisque purus semper eget duis. Varius vel pharetra vel turpis nunc.
          </p>
          <footer>Author N. Here, <cite>From Book XYZ</cite></footer>
        </blockquote>

        <h3>H3 Header Cras eget leo non sapien tincidunt efficitur</h3>
        <p>
          Etiam massa leo, aliquet in nunc in, mollis malesuada velit.
        </p>
        <ul>
          <li>Cras eget leo non sapien tincidunt efficitur.</li>
          <li>Aliquam massa magna, pulvinar eget purus ut, posuere cursus lacus.</li>
          <li>
            Donec lobortis purus nibh, eget fermentum ante semper sit amet.
            <ul>
              <li>Cras eget leo non sapien tincidunt efficitur.</li>
              <li>Aliquam massa magna, pulvinar eget purus ut, posuere cursus lacus.</li>
              <li>Donec lobortis purus nibh, eget fermentum ante semper sit amet.</li>
            </ul>
          </li>
        </ul>

        <h4>H4 Header Cras eget leo non sapien tincidunt efficitur</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget leo non sapien tincidunt efficitur. Duis mattis nunc sit amet placerat gravida. Nulla facilisi. Nullam et ullamcorper massa, non blandit arcu. Donec vestibulum at nibh quis dignissim. Praesent sollicitudin nibh metus, in fringilla magna imperdiet quis. Mauris ut viverra ligula, vel pellentesque velit. Donec fermentum, nibh non aliquet sodales, ipsum ipsum accumsan eros, sit amet condimentum mi ipsum sed erat. Duis non luctus nisl, et tincidunt odio. Nulla vitae tristique ligula. Maecenas sed varius risus, eu volutpat ante.
        </p>
        <p>
          Fusce in rhoncus justo, sed bibendum sem. In hac habitasse platea dictumst. Ut non odio non diam hendrerit luctus. Praesent commodo lacus vel nisl ultricies sodales. Etiam massa leo, aliquet in nunc in, mollis malesuada velit. Aliquam massa magna, pulvinar eget purus ut, posuere cursus lacus. Donec lobortis purus nibh, eget fermentum ante semper sit amet. Ut vitae vestibulum nisi, in elementum est. Suspendisse potenti.
        </p>

        <h5>H5 Header Cras eget leo non sapien tincidunt efficitur</h5>

        <p>
          Etiam massa leo, aliquet in nunc in, mollis malesuada velit.
        </p>
        <ol>
          <li>Cras eget leo non sapien tincidunt efficitur.</li>
          <li>Aliquam massa magna, pulvinar eget purus ut, posuere cursus lacus.</li>
          <li>
            Donec lobortis purus nibh, eget fermentum ante semper sit amet.
            <ol>
              <li>Cras eget leo non sapien tincidunt efficitur.</li>
              <li>Aliquam massa magna, pulvinar eget purus ut, posuere cursus lacus.</li>
              <li>Donec lobortis purus nibh, eget fermentum ante semper sit amet.</li>
            </ol>
          </li>
        </ol>

        <h6>H6 Header Cras eget leo non sapien tincidunt efficitur</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget leo non sapien tincidunt efficitur. Duis mattis nunc sit amet placerat gravida. Nulla facilisi. Nullam et ullamcorper massa, non blandit arcu. Donec vestibulum at nibh quis dignissim. Praesent sollicitudin nibh metus, in fringilla magna imperdiet quis. Mauris ut viverra ligula, vel pellentesque velit. Donec fermentum, nibh non aliquet sodales, ipsum ipsum accumsan eros, sit amet condimentum mi ipsum sed erat. Duis non luctus nisl, et tincidunt odio. Nulla vitae tristique ligula. Maecenas sed varius risus, eu volutpat ante.
        </p>
        <p>
          Fusce in rhoncus justo, sed bibendum sem. In hac habitasse platea dictumst. Ut non odio non diam hendrerit luctus. Praesent commodo lacus vel nisl ultricies sodales. Etiam massa leo, aliquet in nunc in, mollis malesuada velit. Aliquam massa magna, pulvinar eget purus ut, posuere cursus lacus. Donec lobortis purus nibh, eget fermentum ante semper sit amet. Ut vitae vestibulum nisi, in elementum est. Suspendisse potenti.
        </p>
      </div>
    </section>

    <section class="mb-8">
      <dsa-section-legend>Buttons</dsa-section-legend>
      <div class="container-center px-4 flex flex-col md:flex-row">
        <div class="w-full md:w-auto md:mr-2 p-4 bg-white-100 border-solid border-2 border-red-100">
          <a class="btn" href="www.somewhere.com">Regular</a>
        </div>
        <div class="w-full md:w-auto md:mr-2 p-4 bg-red-100 border-solid border-2 border-black-100">
          <a class="btn btn-inverted" href="www.distant.com">Inverted</a>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <dsa-section-legend>Font Reference</dsa-section-legend>
      <div class="container-center text-xl px-4">
        <p class="font-hairline">
          100 HAIRLINE The quick brown fox jumped over the lazy dog.
        </p>
        <p class="font-hairline italic">
          100 HAIRLINE The quick brown fox jumped over the lazy dog.
        </p>
        <p class="font-thin">
          200 THIN The quick brown fox jumped over the lazy dog.
        </p>
        <p class="font-thin italic">
          200 THIN The quick brown fox jumped over the lazy dog.
        </p>
        <p class="font-light">
          300 LIGHT The quick brown fox jumped over the lazy dog.
        </p>
        <p class="font-light italic">
          300 LIGHT The quick brown fox jumped over the lazy dog.
        </p>
        <p class="font-normal">
          400 NORMAL The quick brown fox jumped over the lazy dog.
        </p>
        <p class="font-normal italic">
          400 NORMAL The quick brown fox jumped over the lazy dog.
        </p>
        <p class="font-medium">
          500 MEDIUM The quick brown fox jumped over the lazy dog.
        </p>
        <p class="font-medium italic">
          500 MEDIUM The quick brown fox jumped over the lazy dog.
        </p>
        <p class="font-semibold">
          600 SEMIBOLD The quick brown fox jumped over the lazy dog.
        </p>
        <p class="font-semibold italic">
          600 SEMIBOLD The quick brown fox jumped over the lazy dog.
        </p>
        <p class="font-bold">
          700 BOLD The quick brown fox jumped over the lazy dog.
        </p>
        <p class="font-bold italic">
          700 BOLD The quick brown fox jumped over the lazy dog.
        </p>
        <p class="font-extrabold">
          800 EXTRABOLD The quick brown fox jumped over the lazy dog.
        </p>
        <p class="font-extrabold italic">
          800 EXTRABOLD The quick brown fox jumped over the lazy dog.
        </p>
        <p class="font-black">
          900 BLACK The quick brown fox jumped over the lazy dog.
        </p>
        <p class="font-black italic">
          900 BLACK The quick brown fox jumped over the lazy dog.
        </p>
      </div>
    </section>

    <section class="mb-8">
      <dsa-section-legend>Subscribe</dsa-section-legend>
      <dsa-subscribe></dsa-subscribe>
    </section>

    <section>
      <dsa-section-legend>Footer</dsa-section-legend>
      <dsa-footer>
        <template #icons>
          <dsa-social-icon href="https://www.twitter.com/dsa_chatt"
                           icon="twitter"></dsa-social-icon>
          <dsa-social-icon href="https://www.facebook.com/ChattanoogaDemocraticSocialistsofAmerica"
                           icon="facebook"></dsa-social-icon>
          <dsa-social-icon href="https://www.instagram.com/chattanooga_dsa/"
                           icon="instagram"></dsa-social-icon>
          <dsa-social-icon href="mailto:chattanoogadsa@gmail.com"
                           icon="envelope"></dsa-social-icon>
        </template>

        <template #links>
          <dsa-footer-group>
            <template #header>DSA</template>
            <dsa-footer-link href="https://www.dsausa.org/" title="National DSA Website">
              National
            </dsa-footer-link>
          </dsa-footer-group>

          <dsa-footer-group>
            <template #header>Regional Chapters</template>
            <dsa-footer-link href="https://knoxvilledsa.org/" title="Knoxville DSA Website" target="_blank">
              Knoxville
            </dsa-footer-link>
            <dsa-footer-link href="https://northeasttndsa.org" title="Northeast Tennessee DSA Website" target="_blank">
              Northeast Tennessee
            </dsa-footer-link>
            <dsa-footer-link href="https://midtndsa.org/" title="Middle Tennessee DSA Website" target="_blank">
              Middle Tennessee
            </dsa-footer-link>
            <dsa-footer-link href="https://www.facebook.com/MemphisDSA/" title="Memphis DSA Facebook" target="_blank">
              Memphis
            </dsa-footer-link>
            <dsa-footer-link href="https://madsa.ga/" title="Atlanta DSA Website" target="_blank">
              Atlanta
            </dsa-footer-link>
            <dsa-footer-link href="https://www.facebook.com/BhamDSA/" title="Birmingham DSA Facebook" target="_blank">
              Birmingham
            </dsa-footer-link>
          </dsa-footer-group>

          <dsa-footer-group>
            <template #header>More Resources</template>
            <dsa-footer-link href="#nowhere">Important Link</dsa-footer-link>
            <dsa-footer-link href="#nowhere">Other location for information</dsa-footer-link>
            <dsa-footer-link href="#nowhere">Destination Unknown</dsa-footer-link>
            <dsa-footer-link href="#nowhere">Distant Library</dsa-footer-link>
            <dsa-footer-link href="#nowhere">Etcetera</dsa-footer-link>
          </dsa-footer-group>

          <dsa-footer-group>
            <template #header>And More Things Here</template>
            <dsa-footer-link href="#nowhere">Deleniti eum magnam repudiandae and it gets really really long here. Very long.</dsa-footer-link>
            <dsa-footer-link href="#nowhere">Dignissimos dolores necessitatibus</dsa-footer-link>
            <dsa-footer-link href="#nowhere">Harum minima neque quasi totam!</dsa-footer-link>
            <dsa-footer-link href="#nowhere">Dicta inventore molestiae</dsa-footer-link>
            <dsa-footer-link href="#nowhere">Eligendi impedit</dsa-footer-link>
            <dsa-footer-link href="#nowhere">Ad impedit minima optio pariatur.</dsa-footer-link>
          </dsa-footer-group>

          <dsa-footer-group>
            <template #header>And More Things Here</template>
            <dsa-footer-link href="#nowhere">Deleniti eum magnam repudiandae</dsa-footer-link>
            <dsa-footer-link href="#nowhere">Dignissimos dolores necessitatibus</dsa-footer-link>
            <dsa-footer-link href="#nowhere">Harum minima neque quasi totam!</dsa-footer-link>
            <dsa-footer-link href="#nowhere">Dicta inventore molestiae</dsa-footer-link>
            <dsa-footer-link href="#nowhere">Eligendi impedit</dsa-footer-link>
            <dsa-footer-link href="#nowhere">Ad impedit minima optio pariatur.</dsa-footer-link>
          </dsa-footer-group>
        </template>
      </dsa-footer>
    </section>
  </dsa-main>
</template>

<script>
  import DsaAlert from '~/components/Alert'
  import DsaCallout from '~/components/Callout'
  import DsaCalloutBtn from '~/components/CalloutBtn'
  import DsaCalloutGrid from '~/components/CalloutGrid'
  import DsaFooter from '~/components/Footer.vue'
  import DsaFooterGroup from '~/components/FooterGroup'
  import DsaFooterLink from '~/components/FooterLink'
  import DsaMain from '~/layouts/Main'
  import DsaNavBar from '~/components/NavBar'
  import DsaNavItem from '~/components/NavItem'
  import DsaNavItemSecondary from '~/components/NavItemSecondary'
  import DsaSectionLegend from '~/components/SectionLegend'
  import DsaSubscribe from '~/components/Subscribe.vue'
  import DsaSocialIcon from '~/components/SocialIcon.vue'

  export default {
    metaInfo: {
      title: 'Chattanooga DSA Design',
    },
    components: {
      DsaAlert,
      DsaCallout,
      DsaCalloutBtn,
      DsaCalloutGrid,
      DsaFooter,
      DsaFooterGroup,
      DsaFooterLink,
      DsaMain,
      DsaNavBar,
      DsaNavItem,
      DsaNavItemSecondary,
      DsaSectionLegend,
      DsaSubscribe,
      DsaSocialIcon,
    },
  }
</script>