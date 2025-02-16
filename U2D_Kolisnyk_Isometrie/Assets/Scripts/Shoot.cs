using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Shoot : MonoBehaviour
{
    Animator anim;
    [SerializeField] GameObject bullet;
    void Start()
    {
        anim = GetComponent<Animator>();
    }
    void Update()
    {
        if(Input.GetMouseButtonDown(0))
        {
            anim.Play("Gun");
            GameObject tempobj = Instantiate(bullet, transform.position, transform.rotation);
            tempobj.GetComponent<Rigidbody2D>().AddForce(transform.right * 10f, ForceMode2D.Impulse);
        }
    }
}
