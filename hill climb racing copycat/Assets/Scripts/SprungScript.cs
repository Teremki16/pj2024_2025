using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SprungScript : MonoBehaviour
{
    [SerializeField] Sprite Spring, Sprung;

    GameObject target;

    bool isActivate = false;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.tag == "Koleso" && !isActivate)
        {
            isActivate = true;
            StartCoroutine("Jump");
        }
    }

    IEnumerator Jump()
    {
        yield return new WaitForSeconds(1f);
        GameObject.Find("Car").GetComponent<Rigidbody2D>().AddForce(
            transform.up * 100f, ForceMode2D.Impulse);
        GetComponent<SpriteRenderer>().sprite = Sprung;
        yield return new WaitForSeconds(1f);

        GetComponent<SpriteRenderer>().sprite = Spring;
        isActivate = false;
    }
}
