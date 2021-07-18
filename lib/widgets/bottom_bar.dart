import 'package:explore/widgets/bottom_bar_column.dart';
import 'package:explore/widgets/info_text.dart';
import 'package:explore/widgets/responsive.dart';
import 'package:flutter/material.dart';

class BottomBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(30),
      color: Theme.of(context).bottomAppBarColor,
      child: ResponsiveWidget.isSmallScreen(context)
          ? Column(
              children: [
                Row(
                  mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    /*BottomBarColumn(
                      heading: 'ABOUT',
                      s1: 'Contact Us',
                      s2: 'About Us',
                      s3: 'Careers',
                    ),
                    BottomBarColumn(
                      heading: 'HELP',
                      s1: 'Payment',
                      s2: 'Cancellation',
                      s3: 'FAQ',
                    ),*/
                    BottomBarColumn(
                      heading: 'SOCIAL',
                      s1: 'WhatsApp',
                      s2: 'Instagram',
                      s3: '',
                    ),
                  ],
                ),
                Container(
                  color: Colors.blueGrey,
                  width: double.maxFinite,
                  height: 1,
                ),
                SizedBox(height: 20),
                InfoText(
                  type: 'Email',
                  text: 'winee.lingerie@outlook.com',
                ),
                SizedBox(height: 5),
                InfoText(
                  type: 'Contato',
                  text: '(62) 99234-9163',
                ),
                SizedBox(height: 5),
                InfoText(
                  type: 'Endereço',
                  text: 'Taquaral - GO, 76640-000',
                ),
                SizedBox(height: 20),
                Text(
                  'Copyright © 2021 | WINEE',
                  style: TextStyle(
                    color: Colors.blueGrey[300],
                    fontSize: 14,
                  ),
                ),
              ],
            )
          : Column(
              children: [
                Row(
                  mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    /*BottomBarColumn(
                      heading: 'ABOUT',
                      s1: 'Contact Us',
                      s2: 'About Us',
                      s3: 'Careers',
                    ),
                    BottomBarColumn(
                      heading: 'AJUDA',
                      s1: 'h.marcyhel2012@gmail.com',
                      s2: '',
                      s3: '',
                    ),*/
                    BottomBarColumn(
                      heading: 'SOCIAL',
                      s1: 'WhatsApp',
                      s2: 'Instagram',
                      s3: '',
                    ),
                    Container(
                      color: Colors.blueGrey,
                      width: 2,
                      height: 150,
                    ),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        InfoText(
                          type: 'Email',
                          text: 'winee.lingerie@outlook.com',
                        ),
                        SizedBox(height: 5),
                        InfoText(
                          type: 'Contato',
                          text: '(62) 99234-9163',
                        ),
                        SizedBox(height: 5),
                        InfoText(
                          type: 'Endereço',
                          text: 'Taquaral - GO, 76640-000',
                        )
                      ],
                    ),
                  ],
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Container(
                    color: Colors.blueGrey,
                    width: double.maxFinite,
                    height: 1,
                  ),
                ),
                SizedBox(height: 20),
                Text(
                  'Copyright © 2021 | WINEE',
                  style: TextStyle(
                    color: Colors.blueGrey[300],
                    fontSize: 14,
                  ),
                ),
              ],
            ),
    );
  }
}
