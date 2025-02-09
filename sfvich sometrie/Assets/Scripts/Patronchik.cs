using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Patronchik : MonoBehaviour
{
    void Start()
    {
        GetComponent<Rigidbody2D>().AddForce(transform.right * 25f, ForceMode2D.Impulse);
    }
}
